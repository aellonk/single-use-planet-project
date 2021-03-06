class Api::ItemsController < ApplicationController

	before_action :set_item, only: [:show, :update, :destroy]

	def index
		render json: Item.all
	end

	def create
		item = Item.new(item_params)
		if item.save
			render json: item
		else
			render json: { message: item.errors}, status: 400
		end
	end

	def show
		render json: @item
	end

	def update
		if @item.update(item_params)
			render json: @item
		else
			render json: { message: @item.errors}, status: 400
		end
	end

	def destroy
		if @item.destroy
			render json: {message: "Item Deleted"}, status: 204
		else
			render json: {message: "Unable to delete this item"}, status: 400
		end
	end

	private

	def set_item
		@item = Item.find_by(id: params[:id])
	end

	def item_params
		params.require(:item).permit(:name, :material, :alternative, :instructions, :img_url)
	end
end
