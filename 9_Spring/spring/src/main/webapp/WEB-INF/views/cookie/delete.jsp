<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	쿠키만료
	
	<script>
		function deleteCookie(name){
			document.cookie = name + "=; expires=Wed, 16 Oct 2024 01:22:46 UTC; path=/;";
			
		}	
		deleteCookie("thema");
	</script>
</body>
</html>