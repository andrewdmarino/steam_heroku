/* RESET TABLE */
DROP TABLE IF EXISTS steam_country; 
/* CREATE TABLE STRUCTURE AND COLS */
CREATE TABLE steam_country (
	country_ID INTEGER,
	country VARCHAR (80) NOT NULL,
	games_owned INTEGER NOT NULL
)
/* copy all the data from csv into our steam_country table
table will have index col, country_id col, country col, and games_owned col
*/

COPY steam_country( country_id, country, games_owned)
FROM 'C:\Users\Public\steam_sales_by_country.csv'
DELIMITER ','
CSV HEADER; 
/* SELECT ALL STEAM COUNTRY */
SELECT * FROM steam_country;
/* SAMPLE FILTERED QUERY*/
SELECT * FROM steam_country WHERE games_owned>400000;