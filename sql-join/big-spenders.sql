-- -- SELECT KEYWORD IS PLUCKING/RECIEVING THE SPECIFIC DATA COLUMN IN THE TABLE/USING DOUBLE QUOTES
-- SELECT "amount" , "firstName" , "lastName"
-- -- IS FOLLIWING BY A FROM KEYWORD WHICH GETS THE ENTIRE TABLE
-- from "payments"
-- -- USING THE JOIN METHOD TO GET ALL OF THE TABLES INTO 1     ____________________IMPORTANT___________________
-- join "customers" using ("customerId")
-- -- order by usage to get the greatest one

-- -- LIMIT KEY GETS ONLY THE 10 KEYS INSIDE OF THE PAYMENTS
-- limit 10



-- MAIN solution

select "p"."amount",
       "c"."firstName",
       "c"."lastName"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  order by "p"."amount" desc
  limit 10;
