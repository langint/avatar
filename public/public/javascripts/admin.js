// Admin javascript functions
function showobj(obj){
var t=document.getElementsByTagName('tr'); 
	for(i=0;i<t.length;i++){
		if(t[i].id&&t[i].id!=$(obj).id){
			if(t[i].id.indexOf('edteam')!=-1||t[i].id.indexOf('addteam')!=-1){
				t[i].style.display='none';
			}
		}
	}
 if($(obj).style.display=='none'){
	 $(obj).style.display='';
 }else{$(obj).style.display='none';};
}
function hideobj(obj){
 $(obj).style.display='none';
}

// TEAM OPERATIONS
function opTeam(i,id){
	$('team'+i).style.display='';
	$('opcl'+i).src=$('opcl'+i).src.replace('open','close');
	$('opcl'+i).setAttribute('onclick',"clTeam("+i+","+id+");");
	aj('teamcomp'+i,'/lexsite/admin/team',"id="+id);
}

function clTeam(i,id){
	$('teamcomp'+i).innerHTML='';
	$('team'+i).style.display='none';
	$('opcl'+i).src=$('opcl'+i).src.replace('close','open');
	$('opcl'+i).setAttribute('onclick',"opTeam("+i+","+id+");");
}


function delTeam(id){window.location="/lexsite/admin/del_team?id="+id;}
function chNewTeam(){
var err=0;
if($('ntname').value==""){$('ntname').style.backgroundColor='lightgreen';err=1;}
if($('ntdesc').value==""){$('ntdesc').style.backgroundColor='lightgreen';err=1;}
if(err==0){return true}else{return false}
}
function chEdTeam(id){
var err=0;
if($('tname'+id).value==""){$('tname'+id).style.backgroundColor='lightgreen';err=1;}
if(err==0){return true}else{return false}
}
function edMem(id,k){
if(k==1){var m=2;n=1}else{m=1;n=2};
showobj('memrole'+m+id);showobj('memrole'+(m+2)+id);showobj('memrole'+(m+4)+id);
hideobj('memrole'+n+id);hideobj('memrole'+(n+2)+id);hideobj('memrole'+(n+4)+id);
}
function saveMem(id){
aj('memrole1'+id,'/lexsite/admin/edit_member','id='+id+'&role='+$('mr'+id).value);
edMem(id,0);
}
function delMem(id,t){
aj('teamcomp'+t,'/lexsite/admin/delete_member','id='+id+'&team='+t);
}

// DICTIONARY
function opDic(id){
$('dlist').innerHTML="<img src='/images/light/loader.gif' />";
new Ajax.Request('/lexsite/admin/open_dict', { method:'post', parameters: {'id':id},
	onSuccess:function(transport){$('dlist').innerHTML=transport.responseText;},
  	onComplete:function(transport){$('bulk').style.display='block';},
	onFailure:function(){$('dlist').innerHTML='Failure';}
	  });
}

function chDict(){
var err=0;
if($('ndname').value==""){$('ndname').style.backgroundColor='lightgreen';err=1;}
if($('nddesc').value==""){$('nddesc').style.backgroundColor='lightgreen';err=1;}
if(err==0){return true}else{return false};
}
function edDict(id,m){
var e=document.getElementsByName("dedit");var op=document.getElementsByName("dopen");
var dis=true;var cur="text";
if(m==0){dis=false; cur="pointer"};
for(i=0;i<e.length;i++){e[i].disabled=dis;e[i].style.cursor=cur;}
for(i=0;i<op.length;i++){op[i].disabled=dis;op[i].style.cursor=cur;}
aj("dict"+id,"/lexsite/admin/mod_dict","id="+id+"&mode="+m);
}
function sDict(id){
var err=0;
if($('dname').value==""){$('dname').style.backgroundColor='lightgreen';err=1;}
if($('ddesc').value==""){$('ddesc').style.backgroundColor='lightgreen';err=1;}	
if(err==0){window.location="/lexsite/admin/save_dict?id="+id+"&name="+$('dname').value+"&desc="+$('ddesc').value;}
}
function dDict(id,m,page){
aj("dict"+id,"/lexsite/admin/del_dict","id="+id+"&mode="+m);
}
function Pages(m,id,page,term){	
aj("dlist","/lexsite/admin/browse_dict","mode="+m+"&id="+id+"&page="+page+"&term="+term);	
}
function edTerm(id,i){
aj("e"+id,"/lexsite/admin/edit_entry","id="+id+"&i="+i);
}
function Act(a){
if(a==3){$('dsel').disabled=true}else{$('dsel').disabled=false}	
}
function Tag(id){
aj("tag"+id,"/lexsite/admin/edit_tag","id="+id);	
}
function clEntry(id,i,m){
var params="id="+id+"&i="+i+"&mode="+m; 
if(m==2){
	params=params+"&src="+$('src').value+"&trg="+$('trg').value+"&com="+$('com').value;//+"&tagcode="+$('ct').value;
}
aj("e"+id,"/lexsite/admin/close_entry",params);
}
function saveEntry(id,i){
var params="id="+id+"&src="+$('src'+id).value+"&comm="+$('comm'+id).value;
}
function addTag(id,m,map){
var params="id="+id+"&mode="+m;
if(m==1){
var params=params+"&tag="+$('tag').value;
}
if(m==3){params=params+"&map="+map}
aj("tags","/lexsite/admin/add_tag",params);
}
function s(m){
var c=document.getElementsByName('chbx');var sel=[];var d=true;var d1=true;	
for(i=0;i<c.length;i++){if(c[i].checked){sel.push(c[i].id.substr(2))}}
if(m==0){
	if(sel.length>0){
		d=false;
		if($('act').value!=3){d1=false}
	}
}else{d=true}
$('act').disabled=d;$('dsel').disabled=d1;$('bbut').disabled=d;
return sel;
}

function actions(){
var data=$('data').value.split(",");
var params="mode="+$('act').value+"&dsel="+$('dsel').value+"&id="+data[0]+"&page="+data[1];
var c=document.getElementsByName('chbx');var sel=[];
sel=s(1);
aj("dlist","/lexsite/admin/bulk_action",params+"&entries="+sel);
}

function loadXLS(){
//var k=$("upl").name;//.serialize();
alert('k');
return false;
//aj('main','/lexsite/admin/load_file',k);
}



//_____________________________________ OLD

function checkAll(s,n){
	var i=0;
	while(i<n){
		$('c'+i).checked=s;i++;
	}
}



function delTerm(id,dict){
if(confirm("The entry with id="+id+": source '"+$('src'+id).value+"', target '"+$('trg'+id).value+"' will be deleted. Is it OK?")){
aj('main','/admin/delete_term',"termid="+id+"&dict="+dict);}}

function modTerm(id,dict){
var params="id="+id+"&src="+$('src').value+"&trg="+$('trg').value+"&comments="+$('com').value+"&dict="+dict;
aj('main','/admin/modify_term',params);}

function approveEntry(id){
if(confirm("This entry with id="+id+": "+$('src'+id).value+", trg="+$('trg'+id).value+" will be added to the resource. Is it OK?")){
	params="id="+id+"&src="+$('src'+id).value+"&trg="+$('trg'+id).value+"&subj="+$('subj'+id).value+"&acc="+$('acc'+id).value+"&comments="+$('com'+id).value;
	aj('main','/admin/approve_term',params);
}}


function shutUp(tag,name,id,z){
var t=document.getElementsByTagName(tag);
var s=name.length;
var res=false;var num=0;
for(i=0;i<t.length;i++){
	if(t[i].id.substr(0,s)==name) {
	 	num=t[i].id.substr(s);
		if(num!=id){t[i].style.display='none';res=true;$(z+num).innerHTML='';
		}else{
			if(t[i].style.display=='none'){
					t[i].style.display='';res=true;
			}else{t[i].style.display='none';res=false;$(z+num).innerHTML='';
		}}}}
return res;
}
//-- TEAM FUNCTIONS --//
function saveTeam(id){
var name=$('name');var desc=$('desc');var status=$('status');
if(name.value!=''){
	var params="id="+id+"&name="+name.value+"&desc="+desc.value+"&access="+$('taccess').value;
	if($('status')){params=params+"&status="+status.value}
	aj('stuff','/lexsite/admin/save_team',params);
}else{$('name').value="Enter team name"; }
}

function editTeam(id){
	$('nTeam').style.display='none';
	if(shutUp('tr','r',id,'team')) aj('team'+id,'/lexsite/admin/edit_team',"id="+id);
}

function newTeam(){
if($('tname0').value!=''){
var params="id=0"+"&name="+$('tname0').value+"&desc="+$('tdesc0').value+'&access='+$('taccess').value;
aj('stuff','/lexsite/admin/save_team',params);
}else{$('name0').value='Enter team name'}
}

function editUser(id,team){
$('nUser').style.display='none';$('newUs').value='Add a team member';
var tr=document.getElementsByTagName('tr');
for(i=0;i<tr.length;i++){
	if(tr[i].id.substr(0,1)=='w') {
	 	var num=tr[i].id.substr(1);
		if(num!=id){tr[i].style.display='none'}else{
		if(tr[i].style.display=='none'){tr[i].style.display=''}else{tr[i].style.display='none'}
	}}}
aj('wt'+id,'/lexsite/admin/open_user',"id="+id+'&team='+$('teamid').value);
}

function addUser(){
if($('nUsrow').style.display=='none'){
	$('newUs').value="Close";$('nUsrow').style.display='';
	aj('nUser','/lexsite/admin/new_member','team='+$('teamid').value);
	}else{$('newUs').value="Add team member";$('nUsrow').style.display='none';}
}

function saveUser(id){
var team=$('teamid').value;
var status=$('stat'+id);var role=$('rol'+id);
var params="id="+id+"&status="+status.value+"&role="+role.value+"&team="+team;
aj('team'+team,'/lexsite/admin/save_member', params);
}

function getUser(){
var team=$('teamid').value;	
var name=$('name0').value;var email=$('email0').value; var err=0;
var role=$('role0').value;var mess='Your invitation has been sent to '+email;
var d=document.getElementsByTagName("div");
for(i=0;i<d.length;i++){
	if(d[i].id.substr(0,3)=='eml'){
		if(d[i].innerHTML==email) err=1;
	}}
if(name==''||email==''){ err=2}
if(err==2) {mess='Enter the user name and email'}
	else if(err==1){mess='This user is already a member of the team!'}
	else{//addUser($('newUs'));
	var params="team="+team+"&name="+name+"&email="+email+"&role="+role;
	aj($('team'+team).id,'/lexsite/admin/get_member', params)
}
$('mess').className='text-mail';
$('mess').innerHTML=mess;
}
function delUser(id){
var team=$('teamid').value;
var w="You are about to remove the team member with email address "+$('eml'+id).innerHTML+" from this team.";
if(confirm(w+" Please confirm")){aj('team1','/lexsite/admin/delete_user','id='+id+"&team="+$('teamid').value);}
}

function linkTeam(id,name){
var params="team="+$('tshare').value+"&id="+id+"&dname="+name;
aj('stuff','/lexsite/admin/link_team',params);	
}
// COMMON FUNCTIONS
function OverLay(act,tab){
if(tab!=CMAN){
CMAN=tab;SERV=act;
if(act!='term'&&act!='pol'&&act!='help'&&act!='conn'){
	$('f1').className='Div-ls1'+tab; $('apDiv').style.visibility='visible';}
else {$('core').style.visibility='visible';}
aj('core','/lexsite/admin/overlay','service='+act);
}else{closeDiv('apDiv')}
}

function swap(act,id){
var c='';
for(i=1;i<4;i++){
	c=$('r'+i).className;
	if(c.indexOf('a',c.length-1)>0){c=c.substr(0,c.length-1);$('r'+i).className=c;}
}
aj('subdiv','lexsite/swap','option='+act);
$(id).className=$(id).className+'a';
}



function editItem(id){
var e=$('edit'+id);
if(e.value=="Edit"){setControls(id,'enable');e.value='Close';$('newItem').style.display='none';}
else{setControls(id,'disable');e.value='Edit';}
}
// DICTIONARY FUNCTIONS


function saveTerm(id){
var params='';var count=0;var comm=[];
var source=[];var target=[];var subject=[];
for(i=0;i<10;i++){
		var s=$('s'+i).value;var t=$('t'+i).value;
		if(s!=''&&t!=''){
			source.push(s);
			target.push(t);
			subject.push($('sub'+i).value);
			comm.push($('comm'+i).value);
		}
	}
if(source.length==0){
	alert("Please enter at least one source-target pair");
 }else{
	params="source="+source+"&target="+target+"&subject="+subject+"&comment="+comm+"&id="+id;
	aj('main','/lexsite/admin/save_term', params);
 }
}
function sRes(n){
var i=0;var s=[];var t=[];var sbj=[];id=[];var com=[];var slang=[];var tlang=[];
	while(i<n){
		if($('c'+i).checked==true){
		id.push($('id'+i).value);
		s.push($('s'+i).innerHTML);
		t.push($('t'+i).innerHTML);
		sbj.push($('s'+i).innerHTML);
		slang.push($('slang'+i).innerHTML);
		tlang.push($('tlang'+i).innerHTML);
		com.push($('com'+i).innerHTML);
		}
		i++;
	}	
params="source="+s+"&target="+t+"&sbj="+sbj+"&comment="+com+"&slang="+slang+"&tlang="+tlang+"&id="+id+"&dict="+$('seldic').value;
aj('main','/lexsite/admin/saveto_dict',params);
}
function fEntry(){
var term=encodeURIComponent($('term').value);
if(term.length>0){aj('stuff','/lexsite/admin/find_term','dict='+$('dict').value+"&term="+term+"&exact="+$('exact').checked);}
}

function opEntry(id,name){
if(shutUp('tr','ent',id,'entr')){
aj('entr'+id,'/lexsite/admin/edit_entry',"id="+id+"&dname="+name);
}}

function saveEntryX(id,tcount){
	var tags='';var i=0;
	while($('tag'+i)){tags=tags+$('tag'+i).value+'*'; i++;}
	var params="id="+id+"&src="+$('src').value+"&trg="+$('trg').value+"&com="+$('com').value+"&tags="+tags;
	aj('dunmy','/lexsite/admin/save_entry',params);
	$('entry').style.display='none';
}


// ############ MAIL FUNCTIONS ######################//
function mail(id){
var v='';var sw=1;
if($('r'+id).className=='reg1close'){ $('r'+id).className='reg1open'; var sw=0; 
aj(id,'/lexsite/admin/mail','mode='+id)}
else{$(id).innerHTML='';v='none';$('r'+id).className='reg1close';$('makemail').style.display='none';}
$(id).style.display=v;
}
function sendMail(){
var params='team='+$('team').value+'&user='+$('ulist').value+"&re="+$('re').value+"&mess="+$('mess').value;
mail('makemail');
aj('outbox','/lexsite/admin/send_mail',params);
}
function userList(){
aj('userlist','/lexsite/admin/user_list','team='+$('team').value)
}
function gotoPage(page,dict,term,exact){
var params="page="+page+"&id="+dict+"&term="+"&term="+term+"&exact="+exact;

}
function publishNews(id,mode){
//	var w=$('cont'); 
//	w.style.height='130px';w.style.verticalAlign="middle";
//	w.innerHTML="<span class='text1'><strong>The newsletter is being distributed</strong><p><img src='/images/gray/loader.gif'></p>";	
aj('core','/lexsite/newsletter/distribute', "id="+id+"&mode="+mode+"&email="+$('email').value);
}
function editNews(id,mode){
aj('core','/lexsite/newsletter/edit_news','id='+id+"&mode="+mode);
}
function saveNews(id,mode){
aj('core','/lexsite/newsletter/save_news',$('f').serialize()+"&id="+id+"&mode="+mode);
}
function swVer(id,m){
if(m=='plain'){mode='html'}else{mode='plain'}
aj('core','/lexsite/newsletter/view',"id="+id+"&mode="+mode);
}
function feedback(){
if($('comments').value!=''&&$('name').value!=''){
var params="name="+$('name').value+"&email="+$('email').value+"&topic="+$('topic').value+"&comment="+$('comments').value;	
aj('subdiv','/lexsite/app/feedback',params);}
else{}
}
function ajx(m){aj('core',m)}

function Menu(m){
var path='';
switch (m) {
	case 'account': path='account/profile';break
	case 'news': path='newsletter/index';break;
	default: path='admin/'+m;break;
}
if(m=='analyzer'){aj('core','/lexsite/admin/analyzer')}else{
var loc='/lexsite/admin/index';
loc='/lexsite/'+path;
window.location.href=loc;
}
return false;
}
function uploading(){
$('form').style.display='none';	
$("upload_target").style.display='';	
}
function loadSheets(){
}
function asm(){
var params=document.forms(0).serialize();
aj('core','/lexsite/admin/analyzer',params);
return false;
	}
	
function progress(){
setInterval ( "aj('progress','/lexsite/admin/progress')", 2000 );
}
