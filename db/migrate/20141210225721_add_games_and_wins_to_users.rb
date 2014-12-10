class AddGamesAndWinsToUsers < ActiveRecord::Migration
  def change
  	add_column :users, :games, :integer
  	add_column :users, :wins, :integer
  end
end
