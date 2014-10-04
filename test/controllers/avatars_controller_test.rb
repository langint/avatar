require 'test_helper'

class AvatarsControllerTest < ActionController::TestCase
  test "user information" do
    webpage = get(:show, userid: 1)
    avatar_image = User.find_by_id(1)[:avatar]
    assert_match(/#{avatar_image}/,webpage.body) 
  end

  test "file upload" do
    avatar_image = fixture_file_upload('files/rosebud.gif','image/gif')
    image_before = User.find_by_id(2)[:avatar]
    z = post(:create, :userid => 2, :picture => avatar_image)
    image_after = User.find_by_id(2)[:avatar]
    assert(image_before == "bloam.jpg", "The original image for user 2 was not correct")
    assert(image_after == "rosebud.gif", "The image for user 2 was not updated as expected")
  end

  test "file delete" do
    image_before = User.find_by_id(1)[:avatar]
    webpage = get(:destroy, id: 1) #parameter inconsistency
    image_after = User.find_by_id(1)[:avatar]

    assert(image_before == "rosebud.gif", "The original image for user 2 was not correct")
    assert(image_after.nil?, "The image for user 2 was not updated as expected")
  end
end
