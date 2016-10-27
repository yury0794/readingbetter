-- 오늘의 책
select * from days;
insert into days values(seq_days.nextval, sysdate);
insert into days values(seq_days.nextval, to_date('2016-10-03 12:14:11', 'yyyy-mm-dd hh24:mi:ss'));

update days set today=(to_date('2016-10-03 12:14:11', 'yyyy-mm-dd hh24:mi:ss')) where no=1;
update days set today=sysdate where no=1;
select to_char(sysdate, 'yyyy-mm-dd hh24:mi:ss') from dual;
select * from days where to_char(today, 'yyyy-mm-dd') = to_char(sysdate, 'yyyy-mm-dd');
delete days;
commit;
rollback;

--
select * from tobook;
select * from book;

select count(*) from tobook;

select * from book order by dbms_random.value;
select no from (select * from book order by dbms_random.value) where rownum <= 5;

insert into tobook values(1, 1);
update tobook set BOOK_NO=2 where no=1;
select BOOK_NO from TOBOOK order by no asc;
delete tobook;
rollback;

select book_no from tobook where no=1;
select no, title, cover from book where no=(select book_no from tobook where no=1);

select * from book;
select * from quiz;
delete book where cover is null;
commit;
select * from member;
update scores set point=100 where member_no=21;
select * from goods;