class FaceboxesController < ApplicationController
  # GET /faceboxes
  # GET /faceboxes.json
  def index
    @faceboxes = Facebox.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @faceboxes }
    end
  end

  # GET /faceboxes/1
  # GET /faceboxes/1.json
  def show
    @facebox = Facebox.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @facebox }
    end
  end

  # GET /faceboxes/new
  # GET /faceboxes/new.json
  def new
    @facebox = Facebox.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @facebox }
    end
  end

  # GET /faceboxes/1/edit
  def edit
    @facebox = Facebox.find(params[:id])
  end

  # POST /faceboxes
  # POST /faceboxes.json
  def create
    @facebox = Facebox.new(params[:facebox])

    respond_to do |format|
      if @facebox.save
        format.html { redirect_to @facebox, notice: 'Facebox was successfully created.' }
        format.json { render json: @facebox, status: :created, location: @facebox }
      else
        format.html { render action: "new" }
        format.json { render json: @facebox.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /faceboxes/1
  # PUT /faceboxes/1.json
  def update
    @facebox = Facebox.find(params[:id])

    respond_to do |format|
      if @facebox.update_attributes(params[:facebox])
        format.html { redirect_to @facebox, notice: 'Facebox was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @facebox.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /faceboxes/1
  # DELETE /faceboxes/1.json
  def destroy
    @facebox = Facebox.find(params[:id])
    @facebox.destroy

    respond_to do |format|
      format.html { redirect_to faceboxes_url }
      format.json { head :no_content }
    end
  end
end
