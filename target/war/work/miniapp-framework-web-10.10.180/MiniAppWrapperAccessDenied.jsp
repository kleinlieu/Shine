<%--

    (C) Copyright 2010 Hewlett-Packard Development Company, L.P.

--%>

<%@ page language="java" %>
<%
	 // Avoid Cache problems !!!
	response.setHeader("Pragma", "No-cache");
	response.setHeader("Cache-Control", "no-cache");
	response.setDateHeader("Expires", 0);
%>
<html>
    <head>
        <title>Access denied!</title>
    </head>
    <body>
        <h1>Access Denied</h1>
        <p>We're sorry, but you are not authorized to perform the requested operation.</p>
    </body>
</html>
