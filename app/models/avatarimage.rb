class Avatarimage < ActiveRecord::Base

  def self.save(uploaded,name)
    path = File.join($IMAGE_PATH, name)
    File.open(path,"wb"){|f|f.write(uploaded.read)}
  end

  def self.delete(name)
    path = File.join($IMAGE_PATH, name)
    File.delete(path)
  end

end
