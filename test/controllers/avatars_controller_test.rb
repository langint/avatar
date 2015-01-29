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

    #restore the original file
    avatar_image = fixture_file_upload('files/building3.jpg','image/gif')
    z = post(:create, :userid => 2, :picture => avatar_image)

    assert(image_before == "2.building3.jpg", "The original image for user 2 was not correct")
    assert(image_after == "2.rosebud.gif", "The image for user 2 was not updated as expected")
  end

  test "file delete" do
    image_before = User.find_by_id(1)[:avatar]
    webpage = get(:destroy, id: 1)
    image_after = User.find_by_id(1)[:avatar]


    #restore the original file
    avatar_image = fixture_file_upload('files/bloam.jpg','image/gif')
    z = post(:create, :userid => 1, :picture => avatar_image)


    assert(image_before == "1.bloam.jpg", "The original image for user 1 was not correct")
    assert(image_after.nil?, "The image for user 1 was not updated as expected")


  end
end
