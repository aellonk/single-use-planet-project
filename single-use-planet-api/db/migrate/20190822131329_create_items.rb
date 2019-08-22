class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.string :material
      t.string :alternative
      t.string :instructions
      t.string :img_url

      t.timestamps
    end
  end
end
