class AvatarsController < ApplicationController

  $IMAGE_PATH="public/avatar_images"
  READ_PATH="/avatar_images/"
  
  def show
    @userid=params[:userid].to_i if !params[:userid].nil?
	@users=User.all.pluck(:id)
	return :back if @userid.nil?
	
	@img=User.find_by_id(@userid)[:avatar]
	@img.nil?||@img.empty? ? @avatar=READ_PATH+"blank.jpg" : @avatar=READ_PATH+@img	
  end

  def create
    @userid=params[:userid]
	uploaded=params[:picture]
	if !uploaded.nil?
	  filename= uploaded.original_filename
	  Avatarimage.save(uploaded) 
	  User.register(@userid,filename)
	end
	redirect_to :action=>'show',:userid=>@userid
  end
 
  def destroy
    @userid=params[:id]
    filename=User.find_by_id(@userid)[:avatar]
    Avatarimage.delete(filename)
    User.update(@userid,:avatar=>nil)
    redirect_to :action=>'show',:userid=>@userid
  end

end
