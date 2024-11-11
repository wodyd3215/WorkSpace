<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<!-- include libraries(jQuery, bootstrap) -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />
    <script type="text/javascript" src="http://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

    <!-- include summernote css/js-->
    <link href="${pageContext.servletContext.contextPath}/resources/summernote/summernote-bs5.min.css" rel="stylesheet">
    <script src="${pageContext.servletContext.contextPath}/resources/summernote/summernote-bs5.min.js"></script>
	<title>Insert title here</title>
</head>
<body>
	<form method="post" action="write">
		제목 : <input type="text" name="title">
		<br><br>
		<textarea id="summernote" name="content"></textarea>
		<br>
		<input type="submit" value="작성완료">
	</form>
    <script>
    	$(function(){
    		$('#summernote').summernote({
    	        placeholder: '글을 입력하세요.',
    	        tabsize: 2,
    	        height: 400,
    	        width: 800,
    	        toolbar: [
    	          ['style', ['style']],
    	          ['font', ['bold', 'underline', 'clear']],
    	          ['color', ['color']],
    	          ['para', ['ul', 'ol', 'paragraph']],
    	          ['table', ['table']],
    	          ['insert', ['link', 'picture']],
    	          ['view', ['fullscreen', 'codeview', 'help']]
    	        ],
    	        callbacks: {
    	        	onImageUpload: function(files){
    	        		console.log(files)
    	        	}
    		
    	        }
    	      });
    	})
    	
    	// summersnote에 이미지 업로드가 발생하였을 때 동작하는 함수
    	function fileUpload(files){
    		// summernote는 이미지를 추가하면 해당 이미지파일을 전달해준다.
    		// callbacks에 onImageUpload를 작성하지 않을 경우 자동으로 이미지를 string으로 변환하여 준다.
    		// callbacks에 onImageUpload를 작성할 경우 해당 이미지 경로를 직접 작성해 주어야 한다.
    		
    		// 파일업로드할 때는 form태그에서  enType을 multipart/form-data 형식으로
    		// 요청했던 것처럼 js객체에 FormData객체를 이용해서 ajax요청을 전달해준다.
    		
    		const fd = new FormData();
    		for(let file of files){
    			fd.append("fileList", file);
    		}
    		
    		insertFile(fd, function(){
    			for(let name of nameList) {
    				$("#summernote").summernote("insertImage", "/summer","/etc/resources/img/" + name);
    			}
    		})
    	}
    	
    	function insertFile(data, callback){
    		$.ajax({
    			url: "upload",
    			type: "POST",
    			data: data,
    			processData: false, // default: true -> 전송하는 데이터를 string으로 변환해서 요청
    			contentType: false, // 요청할 때 타입 -> false -> multipart/form-data 형식
    			dataType: "json", // 받을 때 타입
    			success: function(res){
    				console.log(res)
    				callback(res)
    			},
    			error: function(){
    				console.log("파일업로드 api요청 실패")
    			}
    		})
    	}
    </script>
</body>
</html>