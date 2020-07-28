-- CREATE DATABASE server_api;
-- GRANT ALL PRIVILEGES ON sever_api.* TO adu@localhost;
-- FLUSH PRIVILEGES;
/*
CREATE TABLE IF NOT EXISTS server_api.companys (
    comp_id int AUTO_INCREMENT PRIMARY KEY,
    comp_name varchar(255)
);*/


/*CREATE TABLE server_api.servers (
    server_id int AUTO_INCREMENT PRIMARY KEY,
    server_name varchar(255),
    ip varchar(255),
    host_id int,
    server_stat boolean,
    server_up datetime,
    FOREIGN KEY (host_id) REFERENCES companys(comp_id)
    );
*/
