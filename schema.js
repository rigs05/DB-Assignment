const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: String,
    desc: String,
    SKU: String,
    category_id: {
      type: Number,
      ref: "ProductCategory",
    },
    inventory_id: {
      type: Number,
      ref: "ProductInventory",
    },
    price: Number,
    discount_id: {
      type: Number,
      ref: "ProductDiscount",
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // will take care of createdAt and updatedAt automatically
    _id: false, // will stop creating default _id field
  }
);

const productCategorySchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: String,
    desc: String,
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const productInventorySchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    quantity: Number,
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const productDiscountSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name: String,
    desc: String,
    discount_percent: Number,
    active: Boolean,
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

const product = model("product", productSchema);
const ProductCategory = model("productCategory", productCategorySchema);
const ProductInventory = model("productInventory", productInventorySchema);
const ProductDiscount = model("productDiscount", productDiscountSchema);

module.exports = {
  product,
  ProductCategory,
  ProductInventory,
  ProductDiscount,
};
