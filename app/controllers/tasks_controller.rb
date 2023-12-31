class TasksController < ApplicationController
  before_action :authenticate_user!, except: [:landing]
  before_action :set_task, only: %i[ show edit update destroy ]

  def landing
  
  end
  # GET /tasks or /tasks.json
  def index
    @tasks = Task.all
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks or /tasks.json
  def create
    @task = Task.new(task_params)
    if @task.save
      # turbo stream here notice: "Task was successfully created."
      render turbo_stream: turbo_stream.prepend("tasks", partial: 'tasks/task', locals: {task: @task})
    else
      render :new, status: :unprocessable_entity
      render @task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1 or /tasks/1.json
  def update
    if @task.update(task_params)
      render turbo_stream: turbo_stream.prepend("tasks", partial: 'tasks/task', locals: {task: @task})
    else
      render :edit, status: :unprocessable_entity
      render @task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy
    # I dont really want a redirect here !! stream
      redirect_to tasks_url, notice: "Task was successfully destroyed."
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :description, :status)
    end
end
