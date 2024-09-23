-- 1 ~ 10 까지의 게시글을 가져오기
-- 단, BOARD_NO 내림차순(DESC)

SELECT *
FROM(SELECT ROWNUM RNUM, A.*
    FROM (SELECT BOARD_NO,
                   CATEGORY_NAME,
                   BOARD_TITLE,
                   USER_ID,
                   COUNT,
                   TO_CHAR(CREATE_DATE, 'YYYY/MM/DD') AS "CREATE_DATE"
              FROM BOARD B
              JOIN CATEGORY USING(CATEGORY_NO)
              JOIN MEMBER M ON (BOARD_WRITER = USER_NO)
             WHERE B.STATUS = 'Y'
               AND BOARD_TYPE = 1
            ORDER BY BOARD_NO DESC) A)
WHERE RNUM BETWEEN 1 AND 10;