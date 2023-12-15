
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;

SET search_path TO bookingcoffeetable;
CREATE TABLE public.contacts (
	id SERIAL NOT NULL,
    fullname VARCHAR(64) NOT NULL,
    email VARCHAR(128) NOT NULL,
    phone INT NOT NULL,
    subject VARCHAR(64) NOT NULL,
    content TEXT NOT NULL,
	PRIMARY KEY (id));
    
CREATE TABLE public.users (
	id SERIAL NOT NULL,
    roleId INT NOT NULL,
    username VARCHAR(16) NOT NULL,
    passwordUser VARCHAR(16) NOT NULL,
    email VARCHAR(128) NOT NULL,
    emailVerify INT,
    phone INT NOT NULL,
    status INT NOT NULL,
    fullname VARCHAR(64),
    avatar VARCHAR(64),
    createdDate TIMESTAMP,
	PRIMARY KEY (id));

CREATE TABLE public.posts (
	id SERIAL NOT NULL,
	userId INT NOT NULL,
    title VARCHAR(64),
    shortDescription VARCHAR(64),
    description TEXT,
    thumbnail VARCHAR(64),
    status INT,
    createdBy VARCHAR(64),
    createdDate TIMESTAMP,
	PRIMARY KEY (id));

CREATE TABLE public.roles (
	id SERIAL NOT NULL,
    name VARCHAR(64),
    description TEXT,
	PRIMARY KEY (id));

CREATE TABLE public.products (
	id SERIAL NOT NULL,
	categoryId INT NOT NULL,
    name VARCHAR(64),
    price BIGINT,
    description TEXT,
    status INT,
    discount DECIMAL,
    createdDate TIMESTAMP,
	PRIMARY KEY (id));

CREATE TABLE public.reviews (
	id SERIAL NOT NULL,
	productId INT NOT NULL,
    userId INT NOT NULL,
    starRate FLOAT,
    content TEXT,
	PRIMARY KEY (id));

CREATE TABLE public.product_variants (
	id SERIAL NOT NULL,
    productId INT NOT NULL,
    size VARCHAR(4),
    pricePlus BIGINT,
	PRIMARY KEY (id));

CREATE TABLE public.categories (
	id SERIAL NOT NULL,
    name VARCHAR(64),
    status INT,
    image VARCHAR(64),
	PRIMARY KEY (id));

CREATE TABLE public.images (
	id SERIAL NOT NULL,
	productId INT NOT NULL,
    url VARCHAR(64),
	PRIMARY KEY (id));

CREATE TABLE public.reservation_products (
	id SERIAL NOT NULL,
    productId INT NOT NULL,
	reservId INT NOT NULL,
    quantity INT,
    price BIGINT,
    size SMALLINT,
	PRIMARY KEY (id));

CREATE TABLE public.reservations (
	id SERIAL NOT NULL,
	userId INT NOT NULL,
    tableId INT NOT NULL,
    contactName VARCHAR(64),
    contactPhone INT,
    contactEmail VARCHAR(128),
    startTime TIMESTAMP,
    endTime TIMESTAMP,
    status INT,
    paymentMethod VARCHAR(64),
    note TEXT,
    totalPrice BIGINT,
    createdDate TIMESTAMP,
	PRIMARY KEY (id));

CREATE TABLE public.tables (
	id SERIAL NOT NULL,
	areaId INT NOT NULL,
    tableNum INT,
    seatCount INT,
    location VARCHAR(64),
    image VARCHAR(64),
    status INT,
	PRIMARY KEY (id));

CREATE TABLE public.areas (
	id SERIAL NOT NULL,
    name VARCHAR(32),
    status INT,
	PRIMARY KEY (id));

-- Them khoa ngoai cho posts
ALTER TABLE posts ADD CONSTRAINT fk_post FOREIGN KEY(userId) REFERENCES users(id);

-- Them khoa ngoai cho users
ALTER TABLE users ADD CONSTRAINT fk_user FOREIGN KEY(roleId) REFERENCES roles(id);

-- Them khoa ngoai cho reviews
ALTER TABLE reviews ADD CONSTRAINT fk01_review FOREIGN KEY(userId) REFERENCES users(id);
ALTER TABLE reviews ADD CONSTRAINT fk02_review FOREIGN KEY(productId) REFERENCES products(id);

-- Them khoa ngoai cho products
ALTER TABLE products ADD CONSTRAINT fk_product FOREIGN KEY(categoryId) REFERENCES categories(id);

-- Them khoa ngoai cho images
ALTER TABLE images ADD CONSTRAINT fk_image FOREIGN KEY(productId) REFERENCES products(id);

-- Them khoa ngoai cho product_variants
ALTER TABLE product_variants ADD CONSTRAINT fk_product_variant FOREIGN KEY(productId) REFERENCES products(id);

-- Them khoa ngoai cho reservation_products
ALTER TABLE reservation_products ADD CONSTRAINT fk01_reservation_product FOREIGN KEY(productId) REFERENCES products(id);
ALTER TABLE reservation_products ADD CONSTRAINT fk02_reservation_product FOREIGN KEY(reservId) REFERENCES reservations(id);

-- Them khoa ngoai cho reservations
ALTER TABLE reservations ADD CONSTRAINT fk01_reservation FOREIGN KEY(userId) REFERENCES users(id);
ALTER TABLE reservations ADD CONSTRAINT fk02_reservation FOREIGN KEY(tableId) REFERENCES tables(id);

-- Them khoa ngoai cho tables
ALTER TABLE tables ADD CONSTRAINT fk01_information_table FOREIGN KEY(areaId) REFERENCES areas(id);

-- 1
insert into roles (name, description)
values ('menber', 'Thực hiện chức năng của khách hàng'),
 ('admin', 'Thực hiện chức năng của quản lý của hàng');
 
 -- 2
insert into contacts (fullname, email, phone, subject, content)
values ('Nguyen Thi Hong Phan', 'phancute@gmail.com', 0914831447, 'Chat luong phuc vu', 'mon an ngon, nhan vien tot, chat luong phuc vu tot'),
 ('Vo Thi Minh Tho', 'thone@gmail.com', 0207416972, 'nhan vien', 'nhan vien chua than thien, can cai thien ');

-- 3
insert into categories(name, status, image)
values ('Cà phê', 1, null),
 ('Nước ép', 1, null),
 ('Thức uống có cồn',1,null),
 ('Sinh tố', 1, null),
 ('Bánh ngọt', 1, null),
 ('Kem', 1, null),
 ('Trà', 1, null);
 
-- 4
insert into areas(name,status)
values ('Sân vườn', 1),
 ('Tầng 1', 1),
 ('Tầng 2', 1),
 ('Tầng 3', 1),
 ('Sân thượng', 1);
 
 
-- 5
insert into tables (areaId, tableNum, seatCount, location,image,status)
values (1, 1, 2, 'Bên trái sân', '/views/template/custom/image/table/table.jpg', 1),
 (1, 2, 2, 'Bên trái sân', '/views/template/custom/image/table/table1.jpg', 1),
 (1, 3, 2, 'Bên trái sân', '/views/template/custom/image/table/table2.jpg', 1),
 (1, 4, 2, 'Bên trái sân', '/views/template/custom/image/table/table3.jpg', 1),
 (1, 5, 2, 'Bên trái sân', '/views/template/custom/image/table/table4.jpg', 1),
 (1, 6, 5, 'Bên phải sân', '/views/template/custom/image/table/table5.jpg', 1),
 (1, 7, 5, 'Bên phải sân', '/views/template/custom/image/table/table6.jpg', 1),
 (1, 8, 5, 'Bên phải sân', '/views/template/custom/image/table/table7.jpg', 1),
 (2, 9, 2, 'Gần quầy bar', '/views/template/custom/image/table/table8.jpg', 1),
 (2, 10, 2, 'Gần quầy bar', '/views/template/custom/image/table/table9.jpg', 1),
 (2, 11, 2, 'Gần quầy bar', '/views/template/custom/image/table/table4.jpg', 1),
 (2, 12, 5, 'Gần cửa sổ', '/views/template/custom/image/table/table3.jpg', 1),
 (2, 13, 5, 'Gần cửa sổ', '/views/template/custom/image/table/table6.jpg', 1),
 (2, 14, 5, 'Gần cửa sổ', '/views/template/custom/image/table/table7.jpg', 1);


-- 6
insert into users (roleId, username, passwordUser, email, emailVerify, phone, status, fullname, avatar, createdDate)
values (1, 'huutinh', '123123', 'huutinh2412@gmail.com', 0, 0394707535, 1, 'Nguyen Huu Tinh', null, '2022-11-10'),
 (1, 'congthinh', 'abc123', 'congthinh@gmail.com', 0, 0825280546, 1, 'Do Cong Thinh', null, '2021-12-03'),
 (2, 'quibang', 'bang123', 'quibang@gmail.com', 1, 0404727600, 1, 'Tran Qui Bang', null, '2019-06-04'),
 (1, 'tandang', 'tan00', 'tandang@gmail.com', 1, 0924084585, 1, 'Dang Minh Tan', null, '2022-02-11'),
 (1, 'chienbao', 'chien99', 'chienbao@gmail.com', 1, 0707909204, 1, 'Vu Xuan Chien', null, '2019-06-15'),
 (1, 'chienom', 'c1122', 'chienom@gmail.com', 1, 0850718154, 1, 'Nguyen Minh Chien', null, '2022-10-07');



-- 7
insert into posts( userId, title, shortDescription, description, thumbnail, status, createdBy, createdDate)
values (1, ' Lịch sử cà phê', 'Cà phê và Sự phát triển của nó' ,'Trải qua hàng thế kỷ, cà phê đã trở thành một biểu tượng của văn hóa và nền kinh tế toàn cầu. Từ những ngọn đồi xanh tươi ở Ethiopia, cà phê đã lan tỏa khắp thế giới, mang đến cho chúng ta niềm vui và năng lượng hàng ngày. Hãy cùng khám phá hành trình lịch sử của cà phê và những ảnh hưởng to lớn mà nó đã mang lại.', null, 1, 'Nguyễn Hửu Tính', NOW()),
 (2, ' Loại cà phê phổ biến', 'Loại Cà phê phổ biến nhất' ,'Cà phê Arabica và Robusta là hai loại cà phê phổ biến nhất trên thế giới. Arabica mang đến hương vị nhẹ nhàng, thơm ngon với mức độ axit tương đối cao. Trong khi đó, Robusta có hương vị đậm đà và mạnh mẽ hơn với hàm lượng caffeine cao. Cả hai loại cà phê đều có sự đặc trưng riêng và đóng góp vào sự đa dạng và sự phong phú của ngành cà phê.',null, 1, 'Đỗ Công Thịnh' , NOW());



-- 8
insert into products (categoryId, name, price, description, status, discount, createdDate)
values (7, 'Cà phê', 20.000, 'Cà phê là một loại đồ uống làm từ cà phê Trung Nguyên có hương vị đắng nhẹ. Nó có thể được thưởng thức nóng hoặc lạnh và có lợi ích giúp tỉnh táo trong công việc.', 1, 0, NOW()),
 (2, 'Blue Berry', 30.000, 'Thức uống Blueberry là một đồ uống được làm từ quả việt quất, có vị ngọt
 chua và hương vị tươi mát. Nó giàu chất chống oxy hóa và có lợi cho sức khỏe.', 1, 15, NOW()),
  (4, 'Rượu Champagne', 70.000, 'Rượu Champagne là một loại rượu sủi bọt nổi tiếng từ Pháp. 
Nó có màu vàng và có vị sảng khoái. Champagne thường được dùng để kỷ niệm và chúc mừng trong các dịp đặc biệt.', 1, 0, NOW()),
  (2, 'Nước ép Cherry', 30.000, 'Nước ép Cherry là một đồ uống ngọt chua được làm từ quả anh đào, có màu đỏ tươi. 
Nó có hương vị tự nhiên và thích hợp để thưởng thức trong mùa hè.', 1, 25, NOW()),
  (5, 'Đá xay Chocolate', 30.000, 'Đá xay Chocolate là một đồ uống ngọt ngào được làm từ sô cô la, 
có màu nâu và hương vị đặc trưng.', 1, 0, NOW()),
 (4, 'Soda Việt Quốc', 30.000, 'Soda Việt Quốc là một loại nước uống có ga phổ biến tại Việt Nam, có màu trong suốt và vị ngọt.', 1, 0, NOW()),
 (6, 'Cafe Kem Vanilla', 35.000, 'Cafe Kem Vanila là một thức uống trà sữa kết hợp cà phê và hương vị vani.', 1, 0, NOW()),
 (6, 'Cafe Kem Tươi', 25.000, 'Cafe Kem tươi là một thức uống phổ biến kết hợp cà phê và kem tươi.', 1, 0, NOW()),
 (6, 'Kem Chocalate', 32.000, 'Kem Chocolate là một loại kem ngọt ngào được làm từ sô cô la.', 1, 0, NOW()),
 (6, 'Kem Tươi', 10.000, 'Kem tươi là một loại kem mát lạnh và ngọt ngào được làm từ sữa tươi và đường.', 1, 0, NOW()),
 (6, 'Kem Oreo', 20.000, 'Kem Oreo là một loại kem ngọt ngào được làm từ sữa và bột bánh Oreo.', 1, 0, NOW()),
 (4, 'Cooktail', 30.000, 'Cocktail là một thức uống pha chế từ rượu và các thành phần khác nhau như nước trái cây, đường và gia vị.', 1, 0, NOW()),
 (6, 'Kem vanila', 30.000, 'Kem Vanilla là một loại kem được làm từ hương liệu vani và sữa. 
Nó có màu trắng và hương vị ngọt ngào, nhẹ nhàng của vani. Kem Vanilla thường được phục vụ trong các cốc hoặc trên các nồi kem, và có thể được kết hợp với các loại topping như nước sốt trái cây, hạt, hoặc kẹo. Đây là một lựa chọn phổ biến và cổ điển trong thực đơn kem với hương vị đơn giản và thích hợp cho mọi dịp.', 1, 0, NOW()),
 (4, 'Soda Cam', 20.000, 'Soda cam là một loại đồ uống có ga và có hương vị cam. Nó là sự kết hợp giữa nước có ga và nước cam, tạo ra một thức uống tươi mát và ngọt ngào. Soda cam thường được đóng trong chai hoặc lon, và có thể được thưởng thức một mình hoặc kết hợp với đá và lát cam để tăng thêm hương vị và trải nghiệm sảng khoái. Đây là một lựa chọn phổ biến trong thức uống giải 
khát và thường được thưởng thức trong những ngày nóng hay khi cần một ly đồ uống sảng khoái.', 1, 0, NOW()),
 (1, 'Bạc Xỉu', 25.000, 'Bạc xỉu là một loại đồ uống phổ biến trong văn hóa ẩm thực Đài Loan. Nó bao gồm cà phê
 và sữa đặc có đường, được pha chế để tạo ra một tỷ lệ cơ bản giữa cà phê và sữa là 1:1. Bạc xỉu có màu nâu nhạt và vị ngọt, béo mịn. Thức uống này thường được phục vụ trong các cốc hoặc ly, và có thể được thưởng thức nóng hoặc lạnh. Bạc xỉu là một lựa chọn phổ biến cho những người yêu thích cà phê nhẹ nhàng và muốn thêm sự mềm mại của sữa vào thức uống của họ.', 1, 0, NOW()),
  (2, 'Nước Ép Kiwi Lựu', 30.000, 'Nước ép kiwi lựu là một loại đồ uống tự nhiên được làm từ quả kiwi và quả lựu. Quả kiwi có
 vị chua ngọt và màu xanh lá cây, trong khi quả lựu có vị ngọt mát và màu đỏ tươi. Khi ép thành nước, hai loại trái cây này tạo ra một hỗn hợp màu sắc nổi bật và hương vị hài hòa. Nước ép kiwi lựu thường được phục vụ lạnh và có thể được trang trí bằng lát kiwi hoặc hạt lựu. Đây là một thức uống giải khát tự nhiên, giàu vitamin C và chất chống oxy hóa, mang lại sự tươi mát và hương vị tuyệt vời của hai loại trái cây này.', 1, 0, NOW()),
  (3, 'Sinh Tố Kiwi', 30.000, 'Sinh tố kiwi là một loại đồ uống được làm từ quả kiwi và các thành phần khác như sữa, đường hoặc mật ong, và đá. Quả kiwi có vị chua ngọt và màu xanh lá cây đặc trưng. Khi
 được xay nhuyễn với các thành phần khác, tạo ra một sinh tố mịn màng và thơm ngon. Sinh tố kiwi thường được phục vụ lạnh và có thể được trang trí bằng lát kiwi hoặc các loại hạt, như hạt chia hay hạt lựu. Đây là một lựa chọn phổ biến và hấp dẫn để thưởng thức hương vị tươi mát và bổ dưỡng của quả kiwi.', 1, 10, NOW()),
  (7, 'Kombucha', 20.000, 'Kombucha là một đồ uống lên men từ trà đường và vi khuẩn. Nó có vị chua ngọt và có lợi cho sức khỏe.', 1, 0, NOW()),
   (7, 'Trà Chanh', 15.000, 'Trà chanh là một loại đồ uống phổ biến được làm từ trà và nước chanh. Trà thường là trà
 đen, trà xanh hoặc trà đào, trong khi nước chanh được lấy từ quả chanh tươi. Trà chanh có màu vàng nhạt và có vị chua ngọt, hòa quyện giữa hương thơm của trà và chua mát của nước chanh. Thường được phục vụ lạnh hoặc có thể thêm đá để tăng thêm sự sảng khoái. Trà chanh là một lựa chọn thức uống thường ngày, thích hợp để giải khát và tận hưởng trong những ngày nóng.', 1, 0, NOW()),
   (4, 'Cocktail Chanh', 25.000, 'Cocktail Chanh là một loại cocktail được làm từ nước chanh và các thành phần khác nhau như rượu, nước trái cây, đường và gia vị. Có nhiều biến thể của Cocktail Chanh, như Mojito Chanh, Margarita Chanh, Tom Collins, và nhiều hơn nữa. Mỗi biến thể có tỷ lệ và thành phần riêng, tạo ra hương vị và cảm nhận độc đáo. Cocktail Chanh thường có hương vị tươi
 mát, chua ngọt và có thể có một chút hương thảo mộc hoặc gia vị. Nó là một lựa chọn phổ biến trong thực đơn cocktail và thường được thưởng thức trong các buổi tiệc, quán bar hoặc khi bạn muốn thưởng thức một loại cocktail trái cây sảng khoái.', 1, 0, NOW());

-- image
insert into images(productId, url)
values
(1, '/views/template/custom/image/menu/coffee2.jpg'),
(2, '/views/template/custom/image/menu/blueberry.jpg'),
(3, '/views/template/custom/image/menu/champagne.jpg'),
(4, '/views/template/custom/image/menu/cherry.jpg'),
(5, '/views/template/custom/image/menu/chocolate.jpg'),
(6, '/views/template/custom/image/menu/clovis-wood.jpg'),
(7, '/views/template/custom/image/menu/coffee_cream.jpg'),
(8, '/views/template/custom/image/menu/coffee_icecream.jpg'),
(9, '/views/template/custom/image/menu/cookie_chocolate.jpg'),
(10, '/views/template/custom/image/menu/cookie_cream.jpg'),
(11, '/views/template/custom/image/menu/cookie_oreo.jpg'),
(12, '/views/template/custom/image/menu/cooktail.jpg'),
(13, '/views/template/custom/image/menu/cream_vanila.jpg'),
(14, '/views/template/custom/image/menu/crystalweed.jpg'),
(15, '/views/template/custom/image/menu/dalgona.jpg'),
(16, '/views/template/custom/image/menu/fruit_kiwi_luu.jpg'),
(17, '/views/template/custom/image/menu/kiwi.jpg'),
(18, '/views/template/custom/image/menu/kiwi2.jpg'),
(19, '/views/template/custom/image/menu/kombucha.jpg'),
(20, '/views/template/custom/image/menu/lemon.jpg');

-- 9
insert into reservations (userId, tableId,contactName,contactPhone,contactEmail, startTime, endTime, status, paymentMethod,note ,totalPrice,createdDate)
values (1, 1, 'Nguyễn Hửu Tính', 0394707535, 'huutinh2412@gmail.com', '2023-11-22 3:00:00', '2023-11-22 8:00:00', 1, 'Momo','Nước uống ít ngọt',940, NOW()),
 (5, 6, 'Vũ Xuân Chiến', 0913454656, 'chienbao12@gmail.com','2023-11-22 18:00:00' ,'2023-11-22 22:00:00' , 1, 'Tiền mặt','Ít đá, nhiều đường ',540, NOW());

-- 10
insert into product_variants(productId, size,pricePlus)
values (1, 'S',0),
 (1, 'M',10),
 (1, 'L',20),
 (2, 'S',0),
 (2, 'M',10),
 (2, 'L',20),
 (3, 'S',0),
 (3, 'M',10),
 (3, 'L',20),
 (4, 'S',0),
 (4, 'M',10),
 (4, 'L',20),
 (5, 'S',0),
 (5, 'M',10),
 (5, 'L',20),
 (6, 'S',0),
 (6, 'M',10),
 (6, 'L',20),
 (7, 'S',0),
 (7, 'M',10),
 (7, 'L',20),
 (8, 'S',0),
 (8, 'M',10),
 (8, 'L',20),
 (9, 'S',0),
 (9, 'M',10),
 (9,'L',20),
 (10, 'S',0),
 (10, 'M',10),
 (10, 'L',20),
 (11, 'S',0),
 (11, 'M',10),
 (11, 'L',20),
 (12, 'S',0),
 (12, 'M',10),
 (12, 'L',20),
 (13, 'S',0),
 (13, 'M',10),
 (13, 'L',20),
 (14, 'S',0),
 (14, 'M',10),
 (14, 'L',20),
 (15, 'S',0),
 (15, 'M',10),
 (15, 'L',20),
 (16, 'S',0),
 (16, 'M',10),
 (16, 'L',20),
 (17, 'S',0),
 (17, 'M',10),
 (17, 'L',20),
 (18, 'S',0),
 (18, 'M',10),
 (18, 'L',20),
 (19, 'S',0),
 (19, 'M',10),
 (19, 'L',20),
 (20, 'S',0),
 (20, 'M',10),
 (20, 'L',20);

-- 11
insert into reservation_products(productId, reservId, quantity, price, size)
values (1, 1, 2, 120, '3'),
 (2, 1, 10, 800, '2'),
 (1, 2, 5, 200, '1'),
 (2, 2, 8, 720, '3');
 
-- 12
insert into reviews(productId, userId, starRate, content)
values (3,1,3, 'Đồ uống khá ngon, tuy nhiên cần cải thiện độ ngọt của đồ uống'),
 (5,3,2,'Nước uống  tạm được, nhưng không được ngon và không phù hợp cho người béo phì');






