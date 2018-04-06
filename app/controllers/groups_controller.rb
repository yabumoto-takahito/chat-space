class GroupsController < ApplicationController
  def edit
  end

  def update
  end

  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
  end
end
