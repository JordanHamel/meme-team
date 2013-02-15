require 'test_helper'

class FaceboxesControllerTest < ActionController::TestCase
  setup do
    @facebox = faceboxes(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:faceboxes)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create facebox" do
    assert_difference('Facebox.count') do
      post :create, facebox: { canvas_id: @facebox.canvas_id, coordx: @facebox.coordx, coordy: @facebox.coordy, name: @facebox.name }
    end

    assert_redirected_to facebox_path(assigns(:facebox))
  end

  test "should show facebox" do
    get :show, id: @facebox
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @facebox
    assert_response :success
  end

  test "should update facebox" do
    put :update, id: @facebox, facebox: { canvas_id: @facebox.canvas_id, coordx: @facebox.coordx, coordy: @facebox.coordy, name: @facebox.name }
    assert_redirected_to facebox_path(assigns(:facebox))
  end

  test "should destroy facebox" do
    assert_difference('Facebox.count', -1) do
      delete :destroy, id: @facebox
    end

    assert_redirected_to faceboxes_path
  end
end
