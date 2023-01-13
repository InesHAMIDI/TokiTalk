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
	<div id="boutons-Prefaits">
		<button id="oui" name="oui" action=POST>Oui</button>
		<button id="non" name="non" action=POST>Non</button>
		<button id="idk" name="idk" action=POST>Je ne sais pas</button>
	</div>
	<div id="champ-ecriture">
		<input type="text" placeholder: "dadaoui" name="texte" id="texte">
	</div>
</body>
</html>
