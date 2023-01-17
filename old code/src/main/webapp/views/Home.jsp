<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TokiTalk</title>
        <link href="<c:url value="/styles/main.css"/>" rel="stylesheet" type="text/css">
</head>
<body>
<form action="${ pageContext.request.contextPath }/blabla" method="post">
	<button id="oui" name="oui" action="oui" method="post">Oui</button>
	<button id="non" name="non" action=POST>Non</button>
	<button id="idk" name="idk" action=POST>Je ne sais pas</button>
	<input type="text" value="dadaoui" name="texte" id="texte">
</form>
</body>
</html>
