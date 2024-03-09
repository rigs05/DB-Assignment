<!-- The diagram mentioned in the Assignment is made using MySQL consisting of 4 TABLES.
Each TABLE is represented by COLUMN NAME and its DATA-TYPE. -->

Answer 1:
In 'product' table, the 'category_id' is a FOREIGN KEY and a PRIMARY KEY with the name 'id' in the 'product-category' table.
The relationship follows ONE-TO-MANY approach wherein ONE 'product-category' can have MANY 'product'.

Answer 2:
As it is ONE-TO-MANY relation, we CANNOT assign 'category_id' as a PRIMARY KEY. So, In order to ensure that each 'product' is assigned a valid 'product-category', we can SET it's values as NOT NULL.
