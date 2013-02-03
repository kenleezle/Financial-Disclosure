function drawGraph() {
		/* implementation heavily influenced by http://bl.ocks.org/1166403 */
		
		// define dimensions of graph
		var m = [80, 80, 80, 80]; // margins
		var w = window.innerWidth - m[1] - m[3];	// width
		var h = window.innerHeight - m[0] - m[2]; // height
			
		/* 
		 * sample data to plot over time
		 * 		[Success, Failure]
		 *		Start: 1335035400000
		 *		End: 1335294600000
		 *		Step: 300000ms	
		 */
		 
		 //d3.text("dat/"+dvid+".csv", graphArray);
		 var sptext = "2006-01-03,1268.80_2006-01-04,1273.46_2006-01-05,1273.48_2006-01-06,1285.45_2006-01-09,1290.15_2006-01-10,1289.69_2006-01-11,1294.18_2006-01-12,1286.06_2006-01-13,1287.61_2006-01-16,0_2006-01-17,1282.93_2006-01-18,1277.93_2006-01-19,1285.04_2006-01-20,1261.49_2006-01-23,1263.82_2006-01-24,1266.86_2006-01-25,1264.68_2006-01-26,1273.83_2006-01-27,1283.72_2006-01-30,1285.20_2006-01-31,1280.08_2006-02-01,1282.46_2006-02-02,1270.84_2006-02-03,1264.03_2006-02-06,1265.02_2006-02-07,1254.78_2006-02-08,1265.65_2006-02-09,1263.78_2006-02-10,1266.99_2006-02-13,1262.86_2006-02-14,1275.53_2006-02-15,1280.00_2006-02-16,1289.38_2006-02-17,1287.24_2006-02-20,0_2006-02-21,1283.03_2006-02-22,1292.67_2006-02-23,1287.79_2006-02-24,1289.43_2006-02-27,1294.12_2006-02-28,1280.66_2006-03-01,1291.24_2006-03-02,1289.14_2006-03-03,1287.23_2006-03-06,1278.26_2006-03-07,1275.88_2006-03-08,1278.47_2006-03-09,1272.23_2006-03-10,1281.58_2006-03-13,1284.13_2006-03-14,1297.48_2006-03-15,1303.02_2006-03-16,1305.33_2006-03-17,1307.25_2006-03-20,1305.08_2006-03-21,1297.23_2006-03-22,1305.04_2006-03-23,1301.67_2006-03-24,1302.95_2006-03-27,1301.61_2006-03-28,1293.23_2006-03-29,1302.89_2006-03-30,1300.25_2006-03-31,1294.83_2006-04-03,1297.81_2006-04-04,1305.93_2006-04-05,1311.56_2006-04-06,1309.04_2006-04-07,1295.50_2006-04-10,1296.60_2006-04-11,1286.57_2006-04-12,1288.12_2006-04-13,1289.12_2006-04-14,0_2006-04-17,1285.33_2006-04-18,1307.65_2006-04-19,1309.93_2006-04-20,1311.46_2006-04-21,1311.28_2006-04-24,1308.11_2006-04-25,1301.74_2006-04-26,1305.41_2006-04-27,1309.72_2006-04-28,1310.61_2006-05-01,1305.19_2006-05-02,1313.21_2006-05-03,1307.85_2006-05-04,1312.25_2006-05-05,1325.76_2006-05-08,1324.66_2006-05-09,1325.14_2006-05-10,1322.85_2006-05-11,1305.92_2006-05-12,1291.24_2006-05-15,1294.50_2006-05-16,1292.08_2006-05-17,1270.32_2006-05-18,1261.81_2006-05-19,1267.03_2006-05-22,1262.07_2006-05-23,1256.58_2006-05-24,1258.57_2006-05-25,1272.88_2006-05-26,1280.16_2006-05-29,0_2006-05-30,1259.84_2006-05-31,1270.09_2006-06-01,1285.71_2006-06-02,1288.22_2006-06-05,1265.29_2006-06-06,1263.85_2006-06-07,1256.15_2006-06-08,1257.93_2006-06-09,1252.30_2006-06-12,1236.40_2006-06-13,1223.69_2006-06-14,1230.04_2006-06-15,1256.16_2006-06-16,1251.54_2006-06-19,1240.14_2006-06-20,1240.12_2006-06-21,1252.20_2006-06-22,1245.60_2006-06-23,1244.50_2006-06-26,1250.56_2006-06-27,1239.20_2006-06-28,1246.00_2006-06-29,1272.87_2006-06-30,1270.20_2006-07-03,1280.19_2006-07-04,0_2006-07-05,1270.91_2006-07-06,1274.08_2006-07-07,1265.48_2006-07-10,1267.34_2006-07-11,1272.52_2006-07-12,1258.60_2006-07-13,1242.29_2006-07-14,1236.20_2006-07-17,1234.49_2006-07-18,1236.86_2006-07-19,1259.81_2006-07-20,1249.13_2006-07-21,1240.29_2006-07-24,1260.91_2006-07-25,1268.88_2006-07-26,1268.40_2006-07-27,1263.20_2006-07-28,1278.55_2006-07-31,1276.66_2006-08-01,1270.92_2006-08-02,1278.55_2006-08-03,1280.27_2006-08-04,1279.36_2006-08-07,1275.77_2006-08-08,1271.48_2006-08-09,1265.95_2006-08-10,1271.81_2006-08-11,1266.74_2006-08-14,1268.21_2006-08-15,1285.58_2006-08-16,1295.43_2006-08-17,1297.48_2006-08-18,1302.30_2006-08-21,1297.52_2006-08-22,1298.82_2006-08-23,1292.99_2006-08-24,1296.06_2006-08-25,1295.09_2006-08-28,1301.78_2006-08-29,1304.28_2006-08-30,1304.27_2006-08-31,1303.82_2006-09-01,1311.01_2006-09-04,0_2006-09-05,1313.25_2006-09-06,1300.26_2006-09-07,1294.02_2006-09-08,1298.92_2006-09-11,1299.54_2006-09-12,1313.11_2006-09-13,1318.07_2006-09-14,1316.28_2006-09-15,1319.87_2006-09-18,1321.18_2006-09-19,1318.31_2006-09-20,1325.18_2006-09-21,1318.03_2006-09-22,1314.78_2006-09-25,1326.37_2006-09-26,1336.34_2006-09-27,1336.59_2006-09-28,1339.15_2006-09-29,1335.85_2006-10-02,1331.32_2006-10-03,1334.11_2006-10-04,1350.22_2006-10-05,1353.22_2006-10-06,1349.58_2006-10-09,1350.66_2006-10-10,1353.42_2006-10-11,1349.95_2006-10-12,1362.83_2006-10-13,1365.62_2006-10-16,1369.05_2006-10-17,1364.05_2006-10-18,1365.96_2006-10-19,1366.96_2006-10-20,1368.60_2006-10-23,1377.02_2006-10-24,1377.38_2006-10-25,1382.22_2006-10-26,1389.08_2006-10-27,1377.34_2006-10-30,1377.93_2006-10-31,1377.94_2006-11-01,1367.81_2006-11-02,1367.34_2006-11-03,1364.30_2006-11-06,1379.78_2006-11-07,1382.84_2006-11-08,1385.72_2006-11-09,1378.33_2006-11-10,1380.90_2006-11-13,1384.42_2006-11-14,1393.22_2006-11-15,1396.57_2006-11-16,1399.76_2006-11-17,1401.20_2006-11-20,1400.50_2006-11-21,1402.81_2006-11-22,1406.09_2006-11-23,0_2006-11-24,1400.95_2006-11-27,1381.90_2006-11-28,1386.72_2006-11-29,1399.48_2006-11-30,1400.63_2006-12-01,1396.71_2006-12-04,1409.12_2006-12-05,1414.76_2006-12-06,1412.90_2006-12-07,1407.29_2006-12-08,1409.84_2006-12-11,1413.04_2006-12-12,1411.56_2006-12-13,1413.21_2006-12-14,1425.49_2006-12-15,1427.09_2006-12-18,1422.48_2006-12-19,1425.55_2006-12-20,1423.53_2006-12-21,1418.30_2006-12-22,1410.76_2006-12-25,0_2006-12-26,1416.90_2006-12-27,1426.84_2006-12-28,1424.73_2006-12-29,1418.30_2007-01-01,0_2007-01-02,0_2007-01-03,1416.60_2007-01-04,1418.34_2007-01-05,1409.71_2007-01-08,1412.84_2007-01-09,1412.11_2007-01-10,1414.85_2007-01-11,1423.82_2007-01-12,1430.73_2007-01-15,0_2007-01-16,1431.90_2007-01-17,1430.62_2007-01-18,1426.37_2007-01-19,1430.50_2007-01-22,1422.95_2007-01-23,1427.99_2007-01-24,1440.13_2007-01-25,1423.90_2007-01-26,1422.18_2007-01-29,1420.62_2007-01-30,1428.82_2007-01-31,1438.24_2007-02-01,1445.94_2007-02-02,1448.39_2007-02-05,1446.99_2007-02-06,1448.00_2007-02-07,1450.02_2007-02-08,1448.31_2007-02-09,1438.06_2007-02-12,1433.37_2007-02-13,1444.26_2007-02-14,1455.30_2007-02-15,1456.81_2007-02-16,1455.54_2007-02-19,0_2007-02-20,1459.68_2007-02-21,1457.63_2007-02-22,1456.38_2007-02-23,1451.19_2007-02-26,1449.37_2007-02-27,1399.04_2007-02-28,1406.82_2007-03-01,1403.17_2007-03-02,1387.17_2007-03-05,1374.12_2007-03-06,1395.41_2007-03-07,1391.97_2007-03-08,1401.89_2007-03-09,1402.85_2007-03-12,1406.60_2007-03-13,1377.95_2007-03-14,1387.17_2007-03-15,1392.28_2007-03-16,1386.95_2007-03-19,1402.06_2007-03-20,1410.94_2007-03-21,1435.04_2007-03-22,1434.54_2007-03-23,1436.11_2007-03-26,1437.50_2007-03-27,1428.61_2007-03-28,1417.23_2007-03-29,1422.53_2007-03-30,1420.86_2007-04-02,1424.55_2007-04-03,1437.77_2007-04-04,1439.37_2007-04-05,1443.76_2007-04-06,0_2007-04-09,1444.61_2007-04-10,1448.39_2007-04-11,1438.87_2007-04-12,1447.80_2007-04-13,1452.85_2007-04-16,1468.47_2007-04-17,1471.48_2007-04-18,1472.50_2007-04-19,1470.73_2007-04-20,1484.35_2007-04-23,1480.93_2007-04-24,1480.41_2007-04-25,1495.42_2007-04-26,1494.25_2007-04-27,1494.07_2007-04-30,1482.37_2007-05-01,1486.30_2007-05-02,1495.92_2007-05-03,1502.39_2007-05-04,1505.62_2007-05-07,1509.48_2007-05-08,1507.72_2007-05-09,1512.58_2007-05-10,1491.47_2007-05-11,1505.85_2007-05-14,1503.15_2007-05-15,1501.19_2007-05-16,1514.14_2007-05-17,1512.75_2007-05-18,1522.75_2007-05-21,1525.10_2007-05-22,1524.12_2007-05-23,1522.28_2007-05-24,1507.51_2007-05-25,1515.73_2007-05-28,0_2007-05-29,1518.11_2007-05-30,1530.23_2007-05-31,1530.62_2007-06-01,1536.34_2007-06-04,1539.18_2007-06-05,1530.95_2007-06-06,1517.38_2007-06-07,1490.72_2007-06-08,1507.67_2007-06-11,1509.12_2007-06-12,1493.00_2007-06-13,1515.67_2007-06-14,1522.97_2007-06-15,1532.91_2007-06-18,1531.05_2007-06-19,1533.70_2007-06-20,1512.84_2007-06-21,1522.19_2007-06-22,1502.56_2007-06-25,1497.74_2007-06-26,1492.89_2007-06-27,1506.34_2007-06-28,1505.71_2007-06-29,1503.35_2007-07-02,1519.43_2007-07-03,1524.87_2007-07-04,0_2007-07-05,1525.40_2007-07-06,1530.44_2007-07-09,1531.85_2007-07-10,1510.12_2007-07-11,1518.76_2007-07-12,1547.70_2007-07-13,1552.50_2007-07-16,1549.52_2007-07-17,1549.37_2007-07-18,1546.17_2007-07-19,1553.08_2007-07-20,1534.10_2007-07-23,1541.57_2007-07-24,1511.04_2007-07-25,1518.09_2007-07-26,1482.66_2007-07-27,1458.95_2007-07-30,1473.91_2007-07-31,1455.27_2007-08-01,1465.81_2007-08-02,1472.20_2007-08-03,1433.06_2007-08-06,1467.67_2007-08-07,1476.71_2007-08-08,1497.49_2007-08-09,1453.09_2007-08-10,1453.64_2007-08-13,1452.92_2007-08-14,1426.54_2007-08-15,1406.70_2007-08-16,1411.27_2007-08-17,1445.94_2007-08-20,1445.55_2007-08-21,1447.12_2007-08-22,1464.07_2007-08-23,1462.50_2007-08-24,1479.37_2007-08-27,1466.79_2007-08-28,1432.36_2007-08-29,1463.76_2007-08-30,1457.64_2007-08-31,1473.99_2007-09-03,0_2007-09-04,1489.42_2007-09-05,1472.29_2007-09-06,1478.55_2007-09-07,1453.55_2007-09-10,1451.70_2007-09-11,1471.49_2007-09-12,1471.56_2007-09-13,1483.95_2007-09-14,1484.25_2007-09-17,1476.65_2007-09-18,1519.78_2007-09-19,1529.03_2007-09-20,1518.75_2007-09-21,1525.75_2007-09-24,1517.73_2007-09-25,1517.21_2007-09-26,1525.42_2007-09-27,1531.38_2007-09-28,1526.75_2007-10-01,1547.04_2007-10-02,1546.63_2007-10-03,1539.59_2007-10-04,1542.84_2007-10-05,1557.59_2007-10-08,1552.58_2007-10-09,1565.15_2007-10-10,1562.47_2007-10-11,1554.41_2007-10-12,1561.80_2007-10-15,1548.71_2007-10-16,1538.53_2007-10-17,1541.24_2007-10-18,1540.08_2007-10-19,1500.63_2007-10-22,1506.33_2007-10-23,1519.59_2007-10-24,1515.88_2007-10-25,1514.40_2007-10-26,1535.28_2007-10-29,1540.98_2007-10-30,1531.02_2007-10-31,1549.38_2007-11-01,1508.44_2007-11-02,1509.65_2007-11-05,1502.17_2007-11-06,1520.27_2007-11-07,1475.62_2007-11-08,1474.77_2007-11-09,1453.70_2007-11-12,1439.18_2007-11-13,1481.05_2007-11-14,1470.58_2007-11-15,1451.15_2007-11-16,1458.74_2007-11-19,1433.27_2007-11-20,1439.70_2007-11-21,1416.77_2007-11-22,0_2007-11-23,1440.70_2007-11-26,1407.22_2007-11-27,1428.23_2007-11-28,1469.02_2007-11-29,1469.72_2007-11-30,1481.14_2007-12-03,1472.42_2007-12-04,1462.79_2007-12-05,1485.01_2007-12-06,1507.34_2007-12-07,1504.66_2007-12-10,1515.96_2007-12-11,1477.65_2007-12-12,1486.59_2007-12-13,1488.41_2007-12-14,1467.95_2007-12-17,1445.90_2007-12-18,1454.98_2007-12-19,1453.00_2007-12-20,1460.12_2007-12-21,1484.46_2007-12-24,1496.45_2007-12-25,0_2007-12-26,1497.66_2007-12-27,1476.37_2007-12-28,1478.49_2007-12-31,1468.36_2008-01-01,0_2008-01-02,1447.16_2008-01-03,1447.16_2008-01-04,1411.63_2008-01-07,1416.18_2008-01-08,1390.19_2008-01-09,1409.13_2008-01-10,1420.33_2008-01-11,1401.02_2008-01-14,1416.25_2008-01-15,1380.95_2008-01-16,1373.20_2008-01-17,1333.25_2008-01-18,1325.19_2008-01-21,0_2008-01-22,1310.50_2008-01-23,1338.60_2008-01-24,1352.07_2008-01-25,1330.61_2008-01-28,1353.97_2008-01-29,1362.30_2008-01-30,1355.81_2008-01-31,1378.55_2008-02-01,1395.42_2008-02-04,1380.82_2008-02-05,1336.64_2008-02-06,1326.45_2008-02-07,1336.91_2008-02-08,1331.29_2008-02-11,1339.13_2008-02-12,1348.86_2008-02-13,1367.21_2008-02-14,1348.86_2008-02-15,1349.99_2008-02-18,0_2008-02-19,1348.78_2008-02-20,1360.03_2008-02-21,1342.53_2008-02-22,1353.11_2008-02-25,1371.80_2008-02-26,1381.29_2008-02-27,1380.02_2008-02-28,1367.68_2008-02-29,1330.63_2008-03-03,1331.34_2008-03-04,1326.75_2008-03-05,1333.70_2008-03-06,1304.34_2008-03-07,1293.37_2008-03-10,1273.37_2008-03-11,1320.65_2008-03-12,1308.77_2008-03-13,1315.48_2008-03-14,1288.14_2008-03-17,1276.60_2008-03-18,1330.74_2008-03-19,1298.42_2008-03-20,1329.51_2008-03-21,0_2008-03-24,1349.88_2008-03-25,1352.99_2008-03-26,1341.13_2008-03-27,1325.76_2008-03-28,1315.22_2008-03-31,1322.70_2008-04-01,1370.18_2008-04-02,1367.53_2008-04-03,1369.31_2008-04-04,1370.40_2008-04-07,1372.54_2008-04-08,1365.54_2008-04-09,1354.49_2008-04-10,1360.55_2008-04-11,1332.83_2008-04-14,1328.32_2008-04-15,1334.43_2008-04-16,1364.71_2008-04-17,1365.56_2008-04-18,1390.33_2008-04-21,1388.17_2008-04-22,1375.94_2008-04-23,1379.93_2008-04-24,1388.82_2008-04-25,1397.84_2008-04-28,1396.37_2008-04-29,1390.94_2008-04-30,1385.59_2008-05-01,1409.34_2008-05-02,1413.90_2008-05-05,1407.49_2008-05-06,1418.26_2008-05-07,1392.57_2008-05-08,1397.68_2008-05-09,1388.28_2008-05-12,1403.58_2008-05-13,1403.04_2008-05-14,1408.66_2008-05-15,1423.57_2008-05-16,1425.35_2008-05-19,1426.63_2008-05-20,1413.40_2008-05-21,1390.71_2008-05-22,1394.35_2008-05-23,1375.93_2008-05-26,0_2008-05-27,1385.35_2008-05-28,1390.84_2008-05-29,1398.26_2008-05-30,1400.38_2008-06-02,1385.67_2008-06-03,1377.65_2008-06-04,1377.20_2008-06-05,1404.05_2008-06-06,1360.68_2008-06-09,1361.76_2008-06-10,1358.44_2008-06-11,1335.49_2008-06-12,1339.87_2008-06-13,1360.03_2008-06-16,1360.14_2008-06-17,1350.93_2008-06-18,1337.81_2008-06-19,1342.83_2008-06-20,1317.93_2008-06-23,1318.00_2008-06-24,1314.29_2008-06-25,1321.97_2008-06-26,1283.15_2008-06-27,1278.38_2008-06-30,1280.00_2008-07-01,1284.91_2008-07-02,1261.52_2008-07-03,1262.90_2008-07-04,0_2008-07-07,1252.31_2008-07-08,1273.70_2008-07-09,1244.69_2008-07-10,1253.39_2008-07-11,1239.49_2008-07-14,1228.30_2008-07-15,1214.91_2008-07-16,1245.36_2008-07-17,1260.32_2008-07-18,1260.68_2008-07-21,1260.00_2008-07-22,1277.00_2008-07-23,1282.19_2008-07-24,1252.54_2008-07-25,1257.76_2008-07-28,1234.37_2008-07-29,1263.20_2008-07-30,1284.26_2008-07-31,1267.38_2008-08-01,1260.31_2008-08-04,1249.01_2008-08-05,1284.88_2008-08-06,1289.19_2008-08-07,1266.07_2008-08-08,1296.32_2008-08-11,1305.32_2008-08-12,1289.59_2008-08-13,1285.83_2008-08-14,1292.93_2008-08-15,1298.20_2008-08-18,1278.60_2008-08-19,1266.69_2008-08-20,1274.54_2008-08-21,1277.72_2008-08-22,1292.20_2008-08-25,1266.84_2008-08-26,1271.51_2008-08-27,1281.66_2008-08-28,1300.68_2008-08-29,1282.83_2008-09-01,0_2008-09-02,1277.58_2008-09-03,1274.98_2008-09-04,1236.83_2008-09-05,1242.31_2008-09-08,1267.79_2008-09-09,1224.51_2008-09-10,1232.04_2008-09-11,1249.05_2008-09-12,1251.70_2008-09-15,1192.70_2008-09-16,1213.59_2008-09-17,1156.39_2008-09-18,1206.51_2008-09-19,1255.08_2008-09-22,1207.09_2008-09-23,1188.22_2008-09-24,1185.87_2008-09-25,1209.18_2008-09-26,1213.01_2008-09-29,1106.39_2008-09-30,1166.36_2008-10-01,1161.06_2008-10-02,1114.28_2008-10-03,1099.23_2008-10-06,1056.89_2008-10-07,996.23_2008-10-08,984.94_2008-10-09,909.92_2008-10-10,899.22_2008-10-13,1003.35_2008-10-14,998.01_2008-10-15,907.84_2008-10-16,946.43_2008-10-17,940.55_2008-10-20,985.40_2008-10-21,955.05_2008-10-22,896.78_2008-10-23,908.11_2008-10-24,876.77_2008-10-27,848.92_2008-10-28,940.51_2008-10-29,930.09_2008-10-30,954.09_2008-10-31,968.75_2008-11-03,966.30_2008-11-04,1005.75_2008-11-05,952.77_2008-11-06,904.88_2008-11-07,930.99_2008-11-10,919.21_2008-11-11,898.95_2008-11-12,852.30_2008-11-13,911.29_2008-11-14,873.29_2008-11-17,850.75_2008-11-18,859.12_2008-11-19,806.58_2008-11-20,752.44_2008-11-21,800.03_2008-11-24,851.81_2008-11-25,857.39_2008-11-26,887.68_2008-11-27,0_2008-11-28,896.24_2008-12-01,816.21_2008-12-02,848.81_2008-12-03,870.74_2008-12-04,845.22_2008-12-05,876.07_2008-12-08,909.70_2008-12-09,888.67_2008-12-10,899.24_2008-12-11,873.59_2008-12-12,879.73_2008-12-15,868.57_2008-12-16,913.18_2008-12-17,904.42_2008-12-18,885.28_2008-12-19,887.88_2008-12-22,871.63_2008-12-23,863.16_2008-12-24,868.15_2008-12-25,0_2008-12-26,872.80_2008-12-29,869.42_2008-12-30,890.64_2008-12-31,903.25_2009-01-01,0_2009-01-02,931.80_2009-01-05,927.45_2009-01-06,934.70_2009-01-07,906.65_2009-01-08,909.73_2009-01-09,890.35_2009-01-12,870.26_2009-01-13,871.79_2009-01-14,842.62_2009-01-15,843.74_2009-01-16,850.12_2009-01-19,0_2009-01-20,805.22_2009-01-21,840.24_2009-01-22,827.50_2009-01-23,831.95_2009-01-26,836.57_2009-01-27,845.71_2009-01-28,874.09_2009-01-29,845.14_2009-01-30,825.88_2009-02-02,825.44_2009-02-03,838.51_2009-02-04,832.23_2009-02-05,845.85_2009-02-06,868.60_2009-02-09,869.89_2009-02-10,827.16_2009-02-11,833.74_2009-02-12,835.19_2009-02-13,826.84_2009-02-16,0_2009-02-17,789.17_2009-02-18,788.42_2009-02-19,778.94_2009-02-20,770.05_2009-02-23,743.33_2009-02-24,773.14_2009-02-25,764.90_2009-02-26,752.83_2009-02-27,735.09_2009-03-02,700.82_2009-03-03,696.33_2009-03-04,712.87_2009-03-05,682.55_2009-03-06,683.38_2009-03-09,676.53_2009-03-10,719.60_2009-03-11,721.36_2009-03-12,750.74_2009-03-13,756.55_2009-03-16,753.89_2009-03-17,778.12_2009-03-18,794.35_2009-03-19,784.04_2009-03-20,768.54_2009-03-23,822.92_2009-03-24,806.12_2009-03-25,813.88_2009-03-26,832.86_2009-03-27,815.94_2009-03-30,787.53_2009-03-31,797.87_2009-04-01,811.08_2009-04-02,834.38_2009-04-03,842.50_2009-04-06,835.48_2009-04-07,815.55_2009-04-08,825.16_2009-04-09,856.56_2009-04-10,0_2009-04-13,858.73_2009-04-14,841.50_2009-04-15,852.06_2009-04-16,865.30_2009-04-17,869.60_2009-04-20,832.39_2009-04-21,850.08_2009-04-22,843.55_2009-04-23,851.92_2009-04-24,866.23_2009-04-27,857.51_2009-04-28,855.16_2009-04-29,873.64_2009-04-30,872.81_2009-05-01,877.52_2009-05-04,907.24_2009-05-05,903.80_2009-05-06,919.53_2009-05-07,907.39_2009-05-08,929.23_2009-05-11,909.24_2009-05-12,908.35_2009-05-13,883.92_2009-05-14,893.07_2009-05-15,882.88_2009-05-18,909.71_2009-05-19,908.13_2009-05-20,903.47_2009-05-21,888.33_2009-05-22,887.00_2009-05-25,0_2009-05-26,910.33_2009-05-27,893.06_2009-05-28,906.83_2009-05-29,919.14_2009-06-01,942.87_2009-06-02,944.74_2009-06-03,931.76_2009-06-04,942.46_2009-06-05,940.09_2009-06-08,939.14_2009-06-09,942.43_2009-06-10,939.15_2009-06-11,944.89_2009-06-12,946.21_2009-06-15,923.72_2009-06-16,911.97_2009-06-17,910.71_2009-06-18,918.37_2009-06-19,921.23_2009-06-22,893.04_2009-06-23,895.10_2009-06-24,900.94_2009-06-25,920.26_2009-06-26,918.90_2009-06-29,927.23_2009-06-30,919.32_2009-07-01,923.33_2009-07-02,896.42_2009-07-03,0_2009-07-06,898.72_2009-07-07,881.03_2009-07-08,879.56_2009-07-09,882.68_2009-07-10,879.13_2009-07-13,901.05_2009-07-14,905.84_2009-07-15,932.68_2009-07-16,940.74_2009-07-17,940.38_2009-07-20,951.13_2009-07-21,954.58_2009-07-22,954.07_2009-07-23,976.29_2009-07-24,979.26_2009-07-27,982.18_2009-07-28,979.62_2009-07-29,975.15_2009-07-30,986.75_2009-07-31,987.48_2009-08-03,1002.63_2009-08-04,1005.65_2009-08-05,1002.72_2009-08-06,997.08_2009-08-07,1010.48_2009-08-10,1007.10_2009-08-11,994.35_2009-08-12,1005.81_2009-08-13,1012.73_2009-08-14,1004.09_2009-08-17,979.73_2009-08-18,989.67_2009-08-19,996.46_2009-08-20,1007.37_2009-08-21,1026.13_2009-08-24,1025.57_2009-08-25,1028.00_2009-08-26,1028.12_2009-08-27,1030.98_2009-08-28,1028.93_2009-08-31,1020.62_2009-09-01,998.04_2009-09-02,994.75_2009-09-03,1003.24_2009-09-04,1016.40_2009-09-07,0_2009-09-08,1025.39_2009-09-09,1033.37_2009-09-10,1044.14_2009-09-11,1042.73_2009-09-14,1049.34_2009-09-15,1052.63_2009-09-16,1068.76_2009-09-17,1065.49_2009-09-18,1068.30_2009-09-21,1064.66_2009-09-22,1071.66_2009-09-23,1060.87_2009-09-24,1050.78_2009-09-25,1044.38_2009-09-28,1062.98_2009-09-29,1060.61_2009-09-30,1057.08_2009-10-01,1029.85_2009-10-02,1025.21_2009-10-05,1040.46_2009-10-06,1054.72_2009-10-07,1057.58_2009-10-08,1065.48_2009-10-09,1071.49_2009-10-12,1076.19_2009-10-13,1073.19_2009-10-14,1092.02_2009-10-15,1096.56_2009-10-16,1087.68_2009-10-19,1097.91_2009-10-20,1091.06_2009-10-21,1081.40_2009-10-22,1092.91_2009-10-23,1079.60_2009-10-26,1066.95_2009-10-27,1063.41_2009-10-28,1042.63_2009-10-29,1066.11_2009-10-30,1036.19_2009-11-02,1042.88_2009-11-03,1045.41_2009-11-04,1046.50_2009-11-05,1066.63_2009-11-06,1069.30_2009-11-09,1093.08_2009-11-10,1093.01_2009-11-11,1098.51_2009-11-12,1087.24_2009-11-13,1093.48_2009-11-16,1109.30_2009-11-17,1110.32_2009-11-18,1109.80_2009-11-19,1094.90_2009-11-20,1091.38_2009-11-23,1106.24_2009-11-24,1105.65_2009-11-25,1110.63_2009-11-26,0_2009-11-27,1091.49_2009-11-30,1095.63_2009-12-01,1108.86_2009-12-02,1109.24_2009-12-03,1099.92_2009-12-04,1105.98_2009-12-07,1103.25_2009-12-08,1091.94_2009-12-09,1095.95_2009-12-10,1102.35_2009-12-11,1106.41_2009-12-14,1114.11_2009-12-15,1107.93_2009-12-16,1109.18_2009-12-17,1096.08_2009-12-18,1102.47_2009-12-21,1114.05_2009-12-22,1118.02_2009-12-23,1120.59_2009-12-24,1126.48_2009-12-25,0_2009-12-28,1127.78_2009-12-29,1126.20_2009-12-30,1126.42_2009-12-31,1115.10_2010-01-01,0_2010-01-04,1132.99_2010-01-05,1136.52_2010-01-06,1137.14_2010-01-07,1141.69_2010-01-08,1144.98_2010-01-11,1146.98_2010-01-12,1136.22_2010-01-13,1145.68_2010-01-14,1148.46_2010-01-15,1136.03_2010-01-18,0_2010-01-19,1150.23_2010-01-20,1138.04_2010-01-21,1116.48_2010-01-22,1091.76_2010-01-25,1096.78_2010-01-26,1092.17_2010-01-27,1097.50_2010-01-28,1084.53_2010-01-29,1073.87_2010-02-01,1089.19_2010-02-02,1103.32_2010-02-03,1097.28_2010-02-04,1063.11_2010-02-05,1066.19_2010-02-08,1056.74_2010-02-09,1070.52_2010-02-10,1068.13_2010-02-11,1078.47_2010-02-12,1075.51_2010-02-15,0_2010-02-16,1094.87_2010-02-17,1099.51_2010-02-18,1106.75_2010-02-19,1109.17_2010-02-22,1108.01_2010-02-23,1094.60_2010-02-24,1105.24_2010-02-25,1102.94_2010-02-26,1104.49_2010-03-01,1115.71_2010-03-02,1118.31_2010-03-03,1118.79_2010-03-04,1122.97_2010-03-05,1138.70_2010-03-08,1138.50_2010-03-09,1140.45_2010-03-10,1145.61_2010-03-11,1150.24_2010-03-12,1149.99_2010-03-15,1150.51_2010-03-16,1159.46_2010-03-17,1166.21_2010-03-18,1165.83_2010-03-19,1159.90_2010-03-22,1165.81_2010-03-23,1174.17_2010-03-24,1167.72_2010-03-25,1165.73_2010-03-26,1166.59_2010-03-29,1173.22_2010-03-30,1173.27_2010-03-31,1169.43_2010-04-01,1178.10_2010-04-02,0_2010-04-05,1187.44_2010-04-06,1189.44_2010-04-07,1182.45_2010-04-08,1186.44_2010-04-09,1194.37_2010-04-12,1196.48_2010-04-13,1197.30_2010-04-14,1210.65_2010-04-15,1211.67_2010-04-16,1192.13_2010-04-19,1197.52_2010-04-20,1207.17_2010-04-21,1205.94_2010-04-22,1208.67_2010-04-23,1217.28_2010-04-26,1212.05_2010-04-27,1183.71_2010-04-28,1191.36_2010-04-29,1206.78_2010-04-30,1186.69_2010-05-03,1202.26_2010-05-04,1173.60_2010-05-05,1165.90_2010-05-06,1128.15_2010-05-07,1110.88_2010-05-10,1159.73_2010-05-11,1155.79_2010-05-12,1171.67_2010-05-13,1157.44_2010-05-14,1135.68_2010-05-17,1136.94_2010-05-18,1120.80_2010-05-19,1115.05_2010-05-20,1071.59_2010-05-21,1087.69_2010-05-24,1073.65_2010-05-25,1074.03_2010-05-26,1067.95_2010-05-27,1103.06_2010-05-28,1089.41_2010-05-31,0_2010-06-01,1070.71_2010-06-02,1098.38_2010-06-03,1102.83_2010-06-04,1064.88_2010-06-07,1050.47_2010-06-08,1062.00_2010-06-09,1055.69_2010-06-10,1086.84_2010-06-11,1091.60_2010-06-14,1089.63_2010-06-15,1115.23_2010-06-16,1114.61_2010-06-17,1116.04_2010-06-18,1117.51_2010-06-21,1113.20_2010-06-22,1095.31_2010-06-23,1092.04_2010-06-24,1073.69_2010-06-25,1076.76_2010-06-28,1074.57_2010-06-29,1041.24_2010-06-30,1030.71_2010-07-01,1027.37_2010-07-02,1022.58_2010-07-05,0_2010-07-06,1028.06_2010-07-07,1060.27_2010-07-08,1070.25_2010-07-09,1077.96_2010-07-12,1078.75_2010-07-13,1095.34_2010-07-14,1095.17_2010-07-15,1096.48_2010-07-16,1064.88_2010-07-19,1071.25_2010-07-20,1083.48_2010-07-21,1069.59_2010-07-22,1093.67_2010-07-23,1102.66_2010-07-26,1115.01_2010-07-27,1113.84_2010-07-28,1106.13_2010-07-29,1101.53_2010-07-30,1101.60_2010-08-02,1125.86_2010-08-03,1120.46_2010-08-04,1127.24_2010-08-05,1125.81_2010-08-06,1121.64_2010-08-09,1127.79_2010-08-10,1121.06_2010-08-11,1089.47_2010-08-12,1083.61_2010-08-13,1079.25_2010-08-16,1079.38_2010-08-17,1092.54_2010-08-18,1094.16_2010-08-19,1075.63_2010-08-20,1071.69_2010-08-23,1067.36_2010-08-24,1051.87_2010-08-25,1055.33_2010-08-26,1047.22_2010-08-27,1064.59_2010-08-30,1048.92_2010-08-31,1049.33_2010-09-01,1080.29_2010-09-02,1090.10_2010-09-03,1104.51_2010-09-06,0_2010-09-07,1091.84_2010-09-08,1098.87_2010-09-09,1104.18_2010-09-10,1109.55_2010-09-13,1121.90_2010-09-14,1121.10_2010-09-15,1125.07_2010-09-16,1124.66_2010-09-17,1125.59_2010-09-20,1142.71_2010-09-21,1139.78_2010-09-22,1134.28_2010-09-23,1124.83_2010-09-24,1148.67_2010-09-27,1142.16_2010-09-28,1147.70_2010-09-29,1144.73_2010-09-30,1141.20_2010-10-01,1146.24_2010-10-04,1137.03_2010-10-05,1160.75_2010-10-06,1159.97_2010-10-07,1158.06_2010-10-08,1165.15_2010-10-11,1165.32_2010-10-12,1169.77_2010-10-13,1178.10_2010-10-14,1173.81_2010-10-15,1176.19_2010-10-18,1184.71_2010-10-19,1165.90_2010-10-20,1178.17_2010-10-21,1180.26_2010-10-22,1183.08_2010-10-25,1185.62_2010-10-26,1185.64_2010-10-27,1182.45_2010-10-28,1183.78_2010-10-29,1183.26_2010-11-01,1184.38_2010-11-02,1193.57_2010-11-03,1197.96_2010-11-04,1221.06_2010-11-05,1225.85_2010-11-08,1223.25_2010-11-09,1213.40_2010-11-10,1218.71_2010-11-11,1213.54_2010-11-12,1199.21_2010-11-15,1197.75_2010-11-16,1178.34_2010-11-17,1178.59_2010-11-18,1196.69_2010-11-19,1199.73_2010-11-22,1197.84_2010-11-23,1180.73_2010-11-24,1198.35_2010-11-25,0_2010-11-26,1189.40_2010-11-29,1187.76_2010-11-30,1180.55_2010-12-01,1206.07_2010-12-02,1221.53_2010-12-03,1224.71_2010-12-06,1223.12_2010-12-07,1223.75_2010-12-08,1228.28_2010-12-09,1233.00_2010-12-10,1240.40_2010-12-13,1240.46_2010-12-14,1241.59_2010-12-15,1235.23_2010-12-16,1242.87_2010-12-17,1243.91_2010-12-20,1247.08_2010-12-21,1254.60_2010-12-22,1258.84_2010-12-23,1256.77_2010-12-24,0_2010-12-27,1257.54_2010-12-28,1258.51_2010-12-29,1259.78_2010-12-30,1257.88_2010-12-31,1257.64";


	//var n=str.split("_");	 
			 
		
		var data1 = [[1990,23],[1991,53],[1992,13],[1993,63],[1994,63],[1995,23],[1996,63],[1997,63],[1998,63],[1999,53],[2000,63]];
		var data2 = [[1990,3],[1991,23],[1992,63],[1993,23],[1994,83],[1995,23]];
		var data3 = [[1993,33],[1994,93],[1995,73],[1996,43],[1997,33],[1998,8],[1999,13],[2000,33]];
		var spdata = sptext.split("_");
		var newspdata=[];
		
		for(var x=0; x<spdata.length;x++){
			//var temp = 
			newspdata.push(spdata[x].split(","));
			//console.log(Date.parse(newspdata[x][0]));
		}
		newspdata=sp500;
		console.log(newspdata);
		
		var startTime = new Date("2006-01-01");
		var endTime = new Date("2010-12-31");
		var timeStep = 86400000;//3.15569e10;
		
		function findMax(obj){
			var temp1 = [];
			for(var x=0; x< obj.length; x++){
				temp1[x] = parseFloat(obj[x][1]);
			}
			//console.log(temp1);
			return Math.max.apply( Math, temp1 );
		}
		
		function findMin(obj){
			var temp2 = [];
			for(var x=0; x< obj.length; x++){
				temp2[x] = parseFloat(obj[x][1]);
			}
			//console.log(temp1);
			return Math.min.apply( Math, temp2 );
		}
		
		var maxsp = findMax(newspdata);
		var minsp = findMin(newspdata);
		var maxG1 = findMax(data1);//63;//Math.max.apply( Math, data1 );
		var maxG2 = findMax(data2);
		var maxG3 = findMax(data3);
		var maxG = Math.max(maxG1, maxG2, maxG3);
		//console.log(data1.length+", "+maxG1+", "+maxG2+", "+maxG3+", "+maxG)
		
		
		
		// X scale starts at epoch time 1335035400000, ends at 1335294600000 with 300s increments
		var x = d3.time.scale().domain([startTime, endTime]).range([0, w]);
		x.tickFormat(d3.time.format("%Y-%m-%d"));
		// Y scale will fit values from 0-10 within pixels h-0 (Note the inverted domain for the y-scale: bigger is up!)
		//var y = d3.scale.linear().domain([0, maxG]).range([h, 0]);
		var y = d3.scale.linear().domain([minsp, maxsp]).range([h, 0]);

		// create a line function that can convert data[] into x and y points
		var line1 = d3.svg.line()
			// assign the X function to plot our line as we wish
			.x(function(d,i) {
				// verbose logging to show what's actually being done
				//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
				// return the X coordinate where we want to plot this datapoint
				//if(d[0] !== null){
					console.log(Date.parse(d[0]));
					return x(new Date(d[0]));
				//}else{
				//	return null;
				//}
			})
			.y(function(d) { 
				// verbose logging to show what's actually being done
				//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
				// return the Y coordinate where we want to plot this datapoint
				//if(d[0] !== null){
					console.log(parseFloat(d[1]))
					return y(parseFloat(d[1])); // use the 1st index of data (for example, get 20 from [20,13])
				//}else{
				//	return null;
				//}
			})
			
			
			var line2 = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d,i) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
					// return the X coordinate where we want to plot this datapoint
					return x(Date.parse(d[0])); 
				})
				.y(function(d) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
					// return the Y coordinate where we want to plot this datapoint
					return y(d[1]); // use the 2nd index of data (for example, get 13 from [20,13])
				})
				
			var line3 = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d,i) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
					// return the X coordinate where we want to plot this datapoint
					return x(startTime.getTime() + (timeStep*i)); 
				})
				.y(function(d) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
					// return the Y coordinate where we want to plot this datapoint
					return y(Math.log((d[1]+d[0])/2)); // use the 2nd index of data (for example, get 13 from [20,13])
				})
				
			var line4 = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d,i) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
					// return the X coordinate where we want to plot this datapoint
					return x(Date.parse(d[0]));
				})
				.y(function(d) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
					// return the Y coordinate where we want to plot this datapoint
					return y(d[1]); // use the 2nd index of data (for example, get 13 from [20,13])
				})
				
			var indicator = d3.svg.line()
				// assign the X function to plot our line as we wish
				.x(function(d,i) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting X value for data point: ' + d + ' using index: ' + i + ' to be at: ' + x(i) + ' using our xScale.');
					// return the X coordinate where we want to plot this datapoint
					return x(startTime.getTime() + (timeStep*i)); 
				})
				.y(function(d) { 
					// verbose logging to show what's actually being done
					//console.log('Plotting Y value for data point: ' + d + ' to be at: ' + y(d) + " using our yScale.");
					// return the Y coordinate where we want to plot this datapoint
					return y(60); // use the 2nd index of data (for example, get 13 from [20,13])
				})


			// Add an SVG element with the desired dimensions and margin.
			var graph = d3.select("#graph").append("svg:svg")
			      .attr("width", w + m[1] + m[3])
			      .attr("height", h + m[0] + m[2])
			    .append("svg:g")
			      .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
			
			    

			// create yAxis
			var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(1);

			// Add the x-axis.
			graph.append("svg:g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + h + ")")
			      .call(xAxis);


			// create left yAxis
			var yAxisLeft = d3.svg.axis().scale(y).ticks(6).tickSubdivide(1).orient("left");
			// Add the y-axis to the left
			graph.append("svg:g")
			      .attr("class", "y axis")
			      .attr("transform", "translate(-10,0)")
			      .call(yAxisLeft);
			
  			// add lines
  			// do this AFTER the axes above so that the line is above the tick-lines
    		//graph.append("svg:path").attr("d", indicator(data)).attr("class", "indicator");
    		graph.append("svg:path").attr("d", line1(newspdata)).attr("class", "data1");
    		//graph.append("svg:path").attr("d", line2(data2)).attr("class", "data2");
    		//graph.append("svg:path").attr("d", line3(data)).attr("class", "data3");
    		//graph.append("svg:path").attr("d", line4(data3)).attr("class", "data4");
    		
			
				 
			graph
				 .selectAll("circleN")
				 .data(newspdata)
				 .enter().append("circle")
				 .attr("fill", "black")
				 .attr("class", "dataNcircle")
				 .attr("r", 5)
				 .attr("cx", function(d,i) { if(i == 0 || i == newspdata.length-1){
				 								console.log("This is ix = "+i+" -> "+Date.parse(d[0]));
				 								return x(Date.parse(d[0]));
				 								}})
				 .attr("cy", function(d,i) { if(i == 0 || i == newspdata.length-1){
				 								console.log("This is iy = "+i+" -> "+parseFloat(d[1]));
				 								return y(parseFloat(d[1]));
				 								}});
			/*
			graph
				 .selectAll("circle1")
				 .data(data1)
				 .enter().append("circle")
				 .attr("fill", "black")
				 .attr("class", "data1circle")
				 .attr("r", 5)
				 .attr("cx", function(d,i) { if(i == 0 || i == data1.length-1){
				 								//console.log("This is ix = "+i);
				 								return x(Date.parse(d[0]));
				 								}})
				 .attr("cy", function(d,i) { if(i == 0 || i == data1.length-1){
				 								//console.log("This is iy = "+i);
				 								return y(d[1]);
				 								}});
			
			graph
				 .selectAll("circle2")
				 .data(data2)
				 .enter().append("circle")
				 .attr("fill", "red")
				 .attr("class", "data2circle")
				 .attr("r", 3)
				 .attr("cx", function(d,i) { if(i == 0 || i == data2.length-1){
				 								console.log("This is ix = "+i);
				 								return x(Date.parse(d[0]));
				 								}})
				 .attr("cy", function(d,i) { if(i == 0 || i == data2.length-1){
				 								console.log("This is iy = "+i);
				 								return y(d[1]);
				 								}});
				*/ 

}
