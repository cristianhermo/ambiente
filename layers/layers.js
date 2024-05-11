var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AguacomoDerechoHumano_1 = new ol.format.GeoJSON();
var features_AguacomoDerechoHumano_1 = format_AguacomoDerechoHumano_1.readFeatures(json_AguacomoDerechoHumano_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguacomoDerechoHumano_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguacomoDerechoHumano_1.addFeatures(features_AguacomoDerechoHumano_1);
var lyr_AguacomoDerechoHumano_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguacomoDerechoHumano_1, 
                style: style_AguacomoDerechoHumano_1,
                popuplayertitle: "Agua como Derecho Humano",
                interactive: true,
                title: '<img src="styles/legend/AguacomoDerechoHumano_1.png" /> Agua como Derecho Humano'
            });
var format_Noalamegaminera_2 = new ol.format.GeoJSON();
var features_Noalamegaminera_2 = format_Noalamegaminera_2.readFeatures(json_Noalamegaminera_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noalamegaminera_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noalamegaminera_2.addFeatures(features_Noalamegaminera_2);
var lyr_Noalamegaminera_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noalamegaminera_2, 
                style: style_Noalamegaminera_2,
                popuplayertitle: "No a la megaminería",
                interactive: true,
                title: '<img src="styles/legend/Noalamegaminera_2.png" /> No a la megaminería'
            });
var format_IniciativaPopular_3 = new ol.format.GeoJSON();
var features_IniciativaPopular_3 = format_IniciativaPopular_3.readFeatures(json_IniciativaPopular_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IniciativaPopular_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IniciativaPopular_3.addFeatures(features_IniciativaPopular_3);
var lyr_IniciativaPopular_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IniciativaPopular_3, 
                style: style_IniciativaPopular_3,
                popuplayertitle: "Iniciativa Popular",
                interactive: true,
                title: '<img src="styles/legend/IniciativaPopular_3.png" /> Iniciativa Popular'
            });
var format_NoNucleares_4 = new ol.format.GeoJSON();
var features_NoNucleares_4 = format_NoNucleares_4.readFeatures(json_NoNucleares_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoNucleares_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoNucleares_4.addFeatures(features_NoNucleares_4);
var lyr_NoNucleares_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoNucleares_4, 
                style: style_NoNucleares_4,
                popuplayertitle: "No Nucleares",
                interactive: true,
                title: '<img src="styles/legend/NoNucleares_4.png" /> No Nucleares'
            });
var format_Nombredelocalidades_5 = new ol.format.GeoJSON();
var features_Nombredelocalidades_5 = format_Nombredelocalidades_5.readFeatures(json_Nombredelocalidades_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombredelocalidades_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombredelocalidades_5.addFeatures(features_Nombredelocalidades_5);
var lyr_Nombredelocalidades_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nombredelocalidades_5, 
                style: style_Nombredelocalidades_5,
                popuplayertitle: "Nombre de localidades",
                interactive: true,
                title: 'Nombre de localidades'
            });
var format_DefensadelAgua_6 = new ol.format.GeoJSON();
var features_DefensadelAgua_6 = format_DefensadelAgua_6.readFeatures(json_DefensadelAgua_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DefensadelAgua_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DefensadelAgua_6.addFeatures(features_DefensadelAgua_6);
var lyr_DefensadelAgua_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DefensadelAgua_6, 
                style: style_DefensadelAgua_6,
                popuplayertitle: "Defensa del Agua",
                interactive: true,
                title: '<img src="styles/legend/DefensadelAgua_6.png" /> Defensa del Agua'
            });
var format_Noalamegaminera_7 = new ol.format.GeoJSON();
var features_Noalamegaminera_7 = format_Noalamegaminera_7.readFeatures(json_Noalamegaminera_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Noalamegaminera_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Noalamegaminera_7.addFeatures(features_Noalamegaminera_7);
var lyr_Noalamegaminera_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Noalamegaminera_7, 
                style: style_Noalamegaminera_7,
                popuplayertitle: "No a la megaminería",
                interactive: true,
                title: '<img src="styles/legend/Noalamegaminera_7.png" /> No a la megaminería'
            });
var format_IniciativaPopular_8 = new ol.format.GeoJSON();
var features_IniciativaPopular_8 = format_IniciativaPopular_8.readFeatures(json_IniciativaPopular_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IniciativaPopular_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IniciativaPopular_8.addFeatures(features_IniciativaPopular_8);
var lyr_IniciativaPopular_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IniciativaPopular_8, 
                style: style_IniciativaPopular_8,
                popuplayertitle: "Iniciativa Popular",
                interactive: true,
                title: '<img src="styles/legend/IniciativaPopular_8.png" /> Iniciativa Popular'
            });
var format_Nombredecomunidades_9 = new ol.format.GeoJSON();
var features_Nombredecomunidades_9 = format_Nombredecomunidades_9.readFeatures(json_Nombredecomunidades_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nombredecomunidades_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nombredecomunidades_9.addFeatures(features_Nombredecomunidades_9);
var lyr_Nombredecomunidades_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nombredecomunidades_9, 
                style: style_Nombredecomunidades_9,
                popuplayertitle: "Nombre de comunidades",
                interactive: true,
                title: 'Nombre de comunidades'
            });
var group_COMUNIDADES = new ol.layer.Group({
                                layers: [lyr_DefensadelAgua_6,lyr_Noalamegaminera_7,lyr_IniciativaPopular_8,lyr_Nombredecomunidades_9,],
                                fold: "open",
                                title: "COMUNIDADES "});
var group_LOCALIDADESCONLEGISLACINAMBIENTAL = new ol.layer.Group({
                                layers: [lyr_AguacomoDerechoHumano_1,lyr_Noalamegaminera_2,lyr_IniciativaPopular_3,lyr_NoNucleares_4,lyr_Nombredelocalidades_5,],
                                fold: "open",
                                title: "LOCALIDADES CON LEGISLACIÓN AMBIENTAL"});

lyr_GoogleSatellite_0.setVisible(true);lyr_AguacomoDerechoHumano_1.setVisible(true);lyr_Noalamegaminera_2.setVisible(true);lyr_IniciativaPopular_3.setVisible(true);lyr_NoNucleares_4.setVisible(true);lyr_Nombredelocalidades_5.setVisible(true);lyr_DefensadelAgua_6.setVisible(true);lyr_Noalamegaminera_7.setVisible(true);lyr_IniciativaPopular_8.setVisible(true);lyr_Nombredecomunidades_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_LOCALIDADESCONLEGISLACINAMBIENTAL,group_COMUNIDADES];
lyr_AguacomoDerechoHumano_1.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IP': 'IP', 'Antinuclea': 'Antinuclea', 'Zonif': 'Zonif', 'Agua': 'Agua', 'No Nuclear': 'No Nuclear', 'Iniciativa': 'Iniciativa', 'No Zonific': 'No Zonific', 'Derecho Hu': 'Derecho Hu', 'peso': 'peso', });
lyr_Noalamegaminera_2.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IP': 'IP', 'Antinuclea': 'Antinuclea', 'Zonif': 'Zonif', 'Agua': 'Agua', 'No Nuclear': 'No Nuclear', 'Iniciativa': 'Iniciativa', 'No Zonific': 'No Zonific', 'Derecho Hu': 'Derecho Hu', 'peso': 'peso', });
lyr_IniciativaPopular_3.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IP': 'IP', 'Antinuclea': 'Antinuclea', 'Zonif': 'Zonif', 'Agua': 'Agua', 'No Nuclear': 'No Nuclear', 'Iniciativa': 'Iniciativa', 'No Zonific': 'No Zonific', 'Derecho Hu': 'Derecho Hu', 'peso': 'peso', });
lyr_NoNucleares_4.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IP': 'IP', 'Antinuclea': 'Antinuclea', 'Zonif': 'Zonif', 'Agua': 'Agua', 'No Nuclear': 'No Nuclear', 'Iniciativa': 'Iniciativa', 'No Zonific': 'No Zonific', 'Derecho Hu': 'Derecho Hu', 'peso': 'peso', });
lyr_Nombredelocalidades_5.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'IP': 'IP', 'Antinuclea': 'Antinuclea', 'Zonif': 'Zonif', 'Agua': 'Agua', 'No Nuclear': 'No Nuclear', 'Iniciativa': 'Iniciativa', 'No Zonific': 'No Zonific', 'Derecho Hu': 'Derecho Hu', 'peso': 'peso', });
lyr_DefensadelAgua_6.set('fieldAliases', {'IP': 'IP', 'No Zonif': 'No Zonif', 'Agua': 'Agua', 'Nombre': 'Nombre', });
lyr_Noalamegaminera_7.set('fieldAliases', {'IP': 'IP', 'No Zonif': 'No Zonif', 'Agua': 'Agua', 'Nombre': 'Nombre', });
lyr_IniciativaPopular_8.set('fieldAliases', {'IP': 'IP', 'No Zonif': 'No Zonif', 'Agua': 'Agua', 'Nombre': 'Nombre', });
lyr_Nombredecomunidades_9.set('fieldAliases', {'IP': 'IP', 'No Zonif': 'No Zonif', 'Agua': 'Agua', 'Nombre': 'Nombre', });
lyr_AguacomoDerechoHumano_1.set('fieldImages', {'NOMBRE': 'TextEdit', 'IP': 'TextEdit', 'Antinuclea': 'TextEdit', 'Zonif': 'TextEdit', 'Agua': 'TextEdit', 'No Nuclear': 'Range', 'Iniciativa': 'Range', 'No Zonific': 'Range', 'Derecho Hu': 'Range', 'peso': 'TextEdit', });
lyr_Noalamegaminera_2.set('fieldImages', {'NOMBRE': 'TextEdit', 'IP': 'TextEdit', 'Antinuclea': 'TextEdit', 'Zonif': 'TextEdit', 'Agua': 'TextEdit', 'No Nuclear': 'Range', 'Iniciativa': 'Range', 'No Zonific': 'Range', 'Derecho Hu': 'Range', 'peso': 'TextEdit', });
lyr_IniciativaPopular_3.set('fieldImages', {'NOMBRE': 'TextEdit', 'IP': 'TextEdit', 'Antinuclea': 'TextEdit', 'Zonif': 'TextEdit', 'Agua': 'TextEdit', 'No Nuclear': 'Range', 'Iniciativa': 'Range', 'No Zonific': 'Range', 'Derecho Hu': 'Range', 'peso': 'TextEdit', });
lyr_NoNucleares_4.set('fieldImages', {'NOMBRE': 'TextEdit', 'IP': 'TextEdit', 'Antinuclea': 'TextEdit', 'Zonif': 'TextEdit', 'Agua': 'TextEdit', 'No Nuclear': 'Range', 'Iniciativa': 'Range', 'No Zonific': 'Range', 'Derecho Hu': 'Range', 'peso': 'TextEdit', });
lyr_Nombredelocalidades_5.set('fieldImages', {'NOMBRE': 'TextEdit', 'IP': 'TextEdit', 'Antinuclea': 'TextEdit', 'Zonif': 'TextEdit', 'Agua': 'TextEdit', 'No Nuclear': 'Range', 'Iniciativa': 'Range', 'No Zonific': 'Range', 'Derecho Hu': 'Range', 'peso': 'TextEdit', });
lyr_DefensadelAgua_6.set('fieldImages', {'IP': 'Range', 'No Zonif': 'Range', 'Agua': 'Range', 'Nombre': 'TextEdit', });
lyr_Noalamegaminera_7.set('fieldImages', {'IP': 'Range', 'No Zonif': 'Range', 'Agua': 'Range', 'Nombre': 'TextEdit', });
lyr_IniciativaPopular_8.set('fieldImages', {'IP': 'Range', 'No Zonif': 'Range', 'Agua': 'Range', 'Nombre': 'TextEdit', });
lyr_Nombredecomunidades_9.set('fieldImages', {'IP': 'Range', 'No Zonif': 'Range', 'Agua': 'Range', 'Nombre': 'TextEdit', });
lyr_AguacomoDerechoHumano_1.set('fieldLabels', {'NOMBRE': 'hidden field', 'IP': 'hidden field', 'Antinuclea': 'hidden field', 'Zonif': 'hidden field', 'Agua': 'hidden field', 'No Nuclear': 'hidden field', 'Iniciativa': 'hidden field', 'No Zonific': 'hidden field', 'Derecho Hu': 'hidden field', 'peso': 'hidden field', });
lyr_Noalamegaminera_2.set('fieldLabels', {'NOMBRE': 'hidden field', 'IP': 'hidden field', 'Antinuclea': 'hidden field', 'Zonif': 'hidden field', 'Agua': 'hidden field', 'No Nuclear': 'hidden field', 'Iniciativa': 'hidden field', 'No Zonific': 'hidden field', 'Derecho Hu': 'hidden field', 'peso': 'hidden field', });
lyr_IniciativaPopular_3.set('fieldLabels', {'NOMBRE': 'hidden field', 'IP': 'hidden field', 'Antinuclea': 'hidden field', 'Zonif': 'hidden field', 'Agua': 'hidden field', 'No Nuclear': 'hidden field', 'Iniciativa': 'hidden field', 'No Zonific': 'hidden field', 'Derecho Hu': 'hidden field', 'peso': 'hidden field', });
lyr_NoNucleares_4.set('fieldLabels', {'NOMBRE': 'inline label - always visible', 'IP': 'inline label - always visible', 'Antinuclea': 'inline label - always visible', 'Zonif': 'inline label - always visible', 'Agua': 'inline label - always visible', 'No Nuclear': 'hidden field', 'Iniciativa': 'hidden field', 'No Zonific': 'hidden field', 'Derecho Hu': 'hidden field', 'peso': 'hidden field', });
lyr_Nombredelocalidades_5.set('fieldLabels', {'NOMBRE': 'hidden field', 'IP': 'hidden field', 'Antinuclea': 'hidden field', 'Zonif': 'hidden field', 'Agua': 'hidden field', 'No Nuclear': 'hidden field', 'Iniciativa': 'hidden field', 'No Zonific': 'hidden field', 'Derecho Hu': 'hidden field', 'peso': 'hidden field', });
lyr_DefensadelAgua_6.set('fieldLabels', {'IP': 'hidden field', 'No Zonif': 'hidden field', 'Agua': 'hidden field', 'Nombre': 'hidden field', });
lyr_Noalamegaminera_7.set('fieldLabels', {'IP': 'hidden field', 'No Zonif': 'hidden field', 'Agua': 'hidden field', 'Nombre': 'hidden field', });
lyr_IniciativaPopular_8.set('fieldLabels', {'IP': 'inline label - always visible', 'No Zonif': 'inline label - always visible', 'Agua': 'inline label - always visible', 'Nombre': 'inline label - always visible', });
lyr_Nombredecomunidades_9.set('fieldLabels', {'IP': 'hidden field', 'No Zonif': 'hidden field', 'Agua': 'hidden field', 'Nombre': 'hidden field', });
lyr_Nombredecomunidades_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});