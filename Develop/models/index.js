// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
//Each one has to reference the foreign key
Product.belongsTo(Category,{
  foreignKey: 'category_id',
  foreignKeyConstraint: true,
  onDelete: 'CASCADE'
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey: 'category_id',
  foreignKeyConstraint: true,
  onDelete: 'CASCADE'
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  through: ProductTag,
  foreignKey: 'product_id'
  //as
  // foreignkey
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  through: ProductTag,
  foreignKey: 'tag_id'
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

