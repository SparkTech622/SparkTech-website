<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

<xsl:template match="/">
<html>
<head>
<title>XML Sitemap</title>
<style type="text/css">
body { font-family: Arial, sans-serif; font-size: 14px; color: #333; }
table { border-collapse: collapse; width: 100%; margin: 20px 0; }
th { background-color: #4CAF50; color: white; text-align: left; padding: 12px; }
td { border: 1px solid #ddd; padding: 12px; }
tr:nth-child(even) { background-color: #f2f2f2; }
tr:hover { background-color: #ddd; }
a { color: #2196F3; text-decoration: none; }
a:hover { text-decoration: underline; }
h1 { color: #333; }
</style>
</head>
<body>
<h1>SparkTech Solutions Sitemap</h1>
<table>
  <tr>
    <th>URL</th>
    <th>Last Modified</th>
    <th>Change Frequency</th>
    <th>Priority</th>
  </tr>
  <xsl:for-each select="sitemap:urlset/sitemap:url">
    <tr>
      <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
      <td><xsl:value-of select="sitemap:lastmod"/></td>
      <td><xsl:value-of select="sitemap:changefreq"/></td>
      <td><xsl:value-of select="sitemap:priority"/></td>
    </tr>
  </xsl:for-each>
</table>
</body>
</html>
</xsl:template>

</xsl:stylesheet>