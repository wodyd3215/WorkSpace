/* SELECT * FROM ALL_USERS; */
-- �����ּ�

/*
    ���� ���� ���
    CREATE USER �����̸� IDENTIFIED BY ��й�ȣ;
    
    GRANT ���� TO ������;
*/

CREATE USER JDBC IDENTIFIED BY JDBC;

-- KH������ �ּ����� ������ �ο�(����, �����Ͱ���)
GRANT CONNECT, RESOURCE TO JDBC;

CREATE USER spring IDENTIFIED BY spring;
GRANT CONNECT, RESOURCE TO spring;