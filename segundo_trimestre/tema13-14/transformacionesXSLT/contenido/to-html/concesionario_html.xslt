<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" indent="yes"/>
    <xsl:template match="/">
        <html>
            <head>
                <title>Concesionario</title>
                <style>
                    body{
                        font-family: Arial, sans-serif;
                        color: darkgreen;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 3px;
                        text-align: left;
                    }
                </style>
            </head>
            <body>
                <h1>Estado del Concesionario</h1>
                <hr></hr>
                <h2>Tenemos un total de
                    <xsl:value-of select="count(concesionario/coche)"/>
                    vehiculos
                </h2>
                <h2>Valorados en 
                    <xsl:value-of select="sum(concesionario/coche/precio)"/>
                    Euros (sin IVA)
                </h2>
                <hr></hr>
                <h2>Listado de vehiculos ordenados por marca</h2>
                <table>
                    <tr>
                        <th>Marca</th>
                        <th>Matrícula</th>
                        <th>Metalizado</th>
                    </tr>
                    <xsl:for-each select="concesionario/coche">
                        <tr>
                            <td><xsl:value-of select="marca"/></td>
                            <td><xsl:value-of select="@matricula"/></td>
                            <td>
                                <xsl:choose>
                                    <xsl:when test="color/@metalizado='S'">Metalizado</xsl:when>
                                    <xsl:otherwise>No Metalizado</xsl:otherwise>
                                </xsl:choose>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
