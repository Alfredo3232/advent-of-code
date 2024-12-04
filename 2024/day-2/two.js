// let arr = [
//     [66, 67, 68, 71, 72, 69],
//     [72, 75, 78, 79, 79],
//     [38, 40, 41, 42, 44, 47, 48, 52],
//     [86, 87, 88, 91, 96],
//     [30, 33, 34, 36, 39, 36, 38, 40],
//     [77, 78, 79, 80, 79, 76],
//     [84, 87, 89, 86, 87, 87],
//     [7, 10, 13, 14, 16, 19, 18, 22],
//     [22, 25, 28, 26, 28, 29, 32, 38],
//     [47, 50, 53, 53, 54, 56, 57, 60],
//     [67, 69, 71, 73, 73, 72],
//     [15, 16, 16, 19, 21, 23, 23],
//     [87, 88, 90, 92, 92, 96],
//     [20, 21, 24, 24, 29],
//     [18, 20, 22, 24, 28, 29, 31, 33],
//     [86, 87, 88, 91, 95, 97, 96],
//     [13, 16, 19, 22, 26, 26],
//     [28, 31, 35, 38, 42],
//     [35, 37, 41, 44, 49],
//     [33, 36, 42, 45, 46],
//     [78, 81, 82, 85, 90, 87],
//     [44, 47, 49, 54, 55, 57, 57],
//     [50, 52, 53, 58, 62],
//     [72, 75, 80, 81, 82, 89],
//     [12, 10, 12, 14, 15, 16, 19, 22],
//     [40, 39, 41, 42, 45, 47, 49, 46],
//     [23, 21, 24, 27, 29, 30, 30],
//     [11, 8, 11, 14, 15, 18, 19, 23],
//     [21, 19, 22, 23, 26, 27, 34],
//     [62, 61, 58, 59, 60],
//     [52, 50, 53, 52, 50],
//     [3, 1, 2, 5, 7, 4, 4],
//     [68, 65, 68, 67, 68, 72],
//     [45, 42, 40, 43, 49],
//     [5, 4, 7, 9, 11, 11, 14, 17],
//     [7, 4, 5, 7, 10, 10, 7],
//     [64, 62, 64, 64, 66, 67, 67],
//     [87, 86, 86, 88, 91, 92, 96],
//     [64, 62, 62, 63, 64, 65, 68, 73],
//     [64, 61, 62, 63, 67, 68],
//     [12, 9, 13, 15, 13],
//     [83, 81, 84, 88, 90, 93, 95, 95],
//     [6, 3, 5, 9, 10, 12, 16],
//     [38, 35, 39, 41, 47],
//     [62, 60, 63, 70, 71, 74],
//     [56, 55, 60, 61, 63, 64, 62],
//     [44, 43, 44, 45, 47, 53, 53],
//     [61, 60, 67, 69, 73],
//     [73, 70, 73, 74, 77, 82, 84, 89],
//     [8, 8, 10, 11, 14, 17],
//     [55, 55, 56, 57, 59, 56],
//     [75, 75, 76, 79, 81, 82, 84, 84],
//     [72, 72, 75, 78, 80, 84],
//     [69, 69, 72, 75, 76, 77, 82],
//     [49, 49, 51, 49, 51],
//     [38, 38, 41, 44, 45, 43, 42],
//     [15, 15, 17, 16, 16],
//     [25, 25, 26, 24, 25, 26, 29, 33],
//     [18, 18, 20, 22, 21, 22, 29],
//     [81, 81, 81, 83, 84, 85, 86],
//     [86, 86, 86, 89, 92, 89],
//     [27, 27, 30, 31, 32, 32, 35, 35],
//     [33, 33, 33, 34, 37, 40, 42, 46],
//     [50, 50, 50, 52, 53, 56, 58, 65],
//     [65, 65, 66, 70, 73],
//     [65, 65, 66, 67, 71, 70],
//     [8, 8, 9, 12, 14, 18, 18],
//     [70, 70, 73, 77, 81],
//     [65, 65, 66, 68, 69, 73, 79],
//     [25, 25, 28, 35, 36],
//     [41, 41, 48, 51, 53, 56, 55],
//     [87, 87, 88, 95, 95],
//     [70, 70, 75, 76, 79, 81, 83, 87],
//     [10, 10, 12, 13, 18, 23],
//     [69, 73, 75, 77, 78, 81, 83, 86],
//     [62, 66, 68, 70, 72, 71],
//     [81, 85, 88, 89, 92, 92],
//     [33, 37, 39, 42, 45, 49],
//     [49, 53, 56, 57, 58, 60, 67],
//     [18, 22, 20, 21, 24, 26],
//     [80, 84, 87, 90, 88, 85],
//     [17, 21, 22, 21, 22, 25, 25],
//     [29, 33, 35, 34, 38],
//     [5, 9, 6, 7, 9, 16],
//     [19, 23, 26, 29, 29, 32],
//     [49, 53, 56, 57, 60, 61, 61, 60],
//     [63, 67, 69, 71, 71, 73, 76, 76],
//     [77, 81, 83, 83, 85, 89],
//     [23, 27, 27, 30, 36],
//     [37, 41, 43, 45, 48, 49, 53, 55],
//     [23, 27, 31, 32, 35, 32],
//     [52, 56, 58, 62, 62],
//     [15, 19, 23, 26, 30],
//     [60, 64, 66, 67, 70, 74, 76, 82],
//     [61, 65, 66, 72, 74, 76],
//     [5, 9, 10, 17, 16],
//     [36, 40, 41, 47, 50, 53, 53],
//     [30, 34, 35, 40, 41, 45],
//     [28, 32, 35, 37, 43, 46, 51],
//     [22, 29, 31, 34, 37],
//     [30, 36, 37, 39, 38],
//     [24, 31, 34, 37, 37],
//     [4, 11, 13, 16, 19, 23],
//     [37, 43, 44, 45, 48, 50, 55],
//     [34, 40, 37, 38, 40, 42, 44],
//     [11, 17, 18, 19, 21, 19, 20, 18],
//     [53, 59, 61, 59, 61, 62, 64, 64],
//     [58, 65, 68, 65, 67, 69, 73],
//     [79, 86, 89, 88, 89, 92, 94, 99],
//     [15, 20, 21, 22, 22, 23, 25, 27],
//     [28, 33, 36, 36, 38, 37],
//     [88, 95, 97, 97, 99, 99],
//     [34, 39, 41, 44, 45, 48, 48, 52],
//     [6, 11, 11, 12, 14, 16, 17, 22],
//     [59, 65, 69, 72, 73, 76],
//     [54, 61, 63, 67, 69, 72, 74, 71],
//     [22, 29, 30, 32, 34, 37, 41, 41],
//     [61, 68, 70, 74, 78],
//     [28, 33, 37, 39, 40, 47],
//     [13, 19, 21, 24, 30, 32],
//     [69, 76, 78, 80, 82, 84, 89, 86],
//     [8, 15, 18, 20, 25, 26, 26],
//     [67, 74, 77, 82, 86],
//     [13, 18, 19, 25, 27, 30, 37],
//     [67, 64, 62, 60, 57, 55, 53, 55],
//     [70, 69, 66, 63, 60, 58, 55, 55],
//     [48, 45, 43, 42, 41, 37],
//     [62, 60, 59, 58, 53],
//     [15, 14, 13, 12, 14, 13, 10, 8],
//     [29, 27, 29, 28, 25, 28],
//     [71, 69, 66, 64, 65, 62, 62],
//     [17, 15, 13, 15, 12, 10, 6],
//     [97, 96, 97, 95, 94, 92, 86],
//     [33, 30, 27, 24, 21, 18, 18, 17],
//     [24, 21, 20, 19, 16, 16, 14, 15],
//     [43, 40, 40, 38, 36, 35, 35],
//     [59, 58, 55, 52, 52, 49, 45],
//     [14, 12, 12, 11, 5],
//     [94, 91, 89, 87, 83, 82, 79],
//     [21, 18, 16, 12, 10, 11],
//     [69, 66, 64, 62, 58, 55, 55],
//     [88, 86, 83, 82, 79, 78, 74, 70],
//     [56, 54, 50, 47, 40],
//     [21, 18, 13, 11, 8, 5],
//     [31, 28, 26, 25, 23, 20, 14, 17],
//     [52, 50, 49, 43, 40, 39, 39],
//     [37, 34, 31, 25, 23, 19],
//     [35, 32, 30, 24, 22, 21, 16],
//     [65, 68, 65, 63, 61, 60, 58, 55],
//     [55, 56, 53, 52, 49, 52],
//     [9, 12, 11, 9, 8, 5, 5],
//     [35, 36, 33, 32, 31, 29, 25],
//     [62, 65, 62, 59, 56, 55, 50],
//     [77, 79, 82, 81, 79],
//     [65, 68, 67, 65, 68, 69],
//     [26, 29, 28, 31, 30, 29, 29],
//     [93, 95, 94, 95, 91],
//     [81, 84, 85, 83, 76],
//     [34, 37, 37, 34, 31, 29, 28, 25],
//     [38, 40, 39, 36, 33, 33, 30, 33],
//     [54, 57, 54, 51, 48, 48, 48],
//     [44, 47, 47, 44, 40],
//     [88, 91, 91, 89, 84],
//     [48, 50, 48, 47, 44, 40, 39, 37],
//     [86, 89, 85, 84, 82, 79, 76, 77],
//     [80, 82, 78, 76, 73, 70, 70],
//     [87, 89, 86, 82, 79, 77, 73],
//     [45, 47, 43, 42, 41, 39, 37, 32],
//     [39, 40, 35, 33, 32, 31],
//     [52, 53, 50, 43, 40, 42],
//     [36, 38, 37, 36, 31, 29, 29],
//     [76, 79, 73, 72, 71, 68, 64],
//     [87, 88, 86, 85, 78, 76, 73, 68],
//     [39, 39, 36, 33, 31],
//     [36, 36, 35, 33, 31, 29, 30],
//     [88, 88, 86, 85, 82, 82],
//     [9, 9, 6, 5, 1],
//     [99, 99, 97, 94, 92, 90, 88, 81],
//     [62, 62, 59, 60, 57, 56],
//     [41, 41, 40, 37, 34, 36, 34, 36],
//     [90, 90, 88, 85, 88, 85, 83, 83],
//     [59, 59, 60, 59, 56, 53, 49],
//     [89, 89, 92, 89, 87, 82],
//     [72, 72, 72, 70, 68],
//     [20, 20, 18, 18, 20],
//     [48, 48, 47, 46, 44, 44, 44],
//     [26, 26, 24, 22, 22, 18],
//     [94, 94, 94, 93, 92, 91, 89, 82],
//     [25, 25, 24, 20, 17, 16, 15],
//     [64, 64, 61, 58, 55, 51, 50, 53],
//     [85, 85, 81, 80, 79, 76, 76],
//     [56, 56, 52, 49, 45],
//     [91, 91, 90, 86, 80],
//     [58, 58, 56, 49, 48],
//     [86, 86, 79, 78, 76, 74, 77],
//     [80, 80, 79, 76, 75, 72, 65, 65],
//     [36, 36, 29, 28, 27, 26, 25, 21],
//     [22, 22, 17, 16, 9],
//     [18, 14, 11, 9, 6],
//     [59, 55, 53, 50, 47, 50],
//     [43, 39, 38, 35, 34, 32, 30, 30],
//     [37, 33, 32, 31, 29, 26, 22],
//     [46, 42, 39, 37, 35, 34, 27],
//     [91, 87, 90, 89, 88, 85, 83],
//     [53, 49, 48, 49, 48, 46, 48],
//     [95, 91, 90, 87, 89, 86, 86],
//     [25, 21, 19, 17, 18, 17, 13],
//     [65, 61, 59, 61, 60, 53],
//     [58, 54, 54, 53, 52, 50],
//     [58, 54, 54, 51, 52],
//     [37, 33, 33, 32, 29, 29],
//     [71, 67, 65, 63, 62, 62, 58],
//     [62, 58, 56, 55, 55, 53, 51, 46],
//     [23, 19, 16, 15, 12, 8, 5],
//     [76, 72, 68, 67, 70],
//     [48, 44, 40, 38, 35, 35],
//     [87, 83, 81, 77, 75, 74, 70],
//     [66, 62, 59, 55, 49],
//     [20, 16, 13, 8, 6, 4, 1],
//     [56, 52, 51, 49, 42, 44],
//     [31, 27, 22, 20, 19, 18, 18],
//     [30, 26, 24, 19, 17, 16, 12],
//     [30, 26, 23, 20, 15, 14, 12, 5],
//     [51, 45, 42, 40, 38],
//     [34, 29, 27, 24, 25],
//     [51, 44, 43, 42, 42],
//     [33, 26, 24, 22, 18],
//     [82, 76, 74, 73, 67],
//     [61, 54, 55, 52, 51, 50],
//     [74, 68, 66, 69, 72],
//     [14, 7, 8, 7, 7],
//     [62, 56, 55, 57, 55, 52, 48],
//     [50, 45, 42, 44, 37],
//     [19, 12, 12, 9, 7, 6],
//     [39, 34, 34, 31, 29, 30],
//     [65, 58, 55, 53, 51, 51, 51],
//     [84, 79, 77, 75, 75, 71],
//     [84, 79, 78, 75, 75, 73, 67],
//     [43, 37, 36, 32, 31, 28, 25, 23],
//     [77, 70, 66, 63, 61, 58, 60],
//     [48, 43, 39, 37, 37],
//     [78, 72, 68, 67, 64, 61, 57],
//     [25, 18, 14, 12, 5],
//     [71, 66, 65, 58, 55, 53],
//     [90, 84, 82, 81, 76, 75, 74, 77],
//     [54, 47, 46, 41, 41],
//     [41, 35, 33, 28, 24],
//     [78, 73, 72, 71, 64, 62, 56],
//     [10, 11, 12, 13, 15, 16, 14],
//     [49, 50, 51, 53, 56, 58, 60, 60],
//     [20, 21, 22, 25, 27, 30, 34],
//     [70, 71, 74, 77, 78, 80, 86],
//     [44, 45, 48, 45, 46, 48, 50, 53],
//     [62, 64, 65, 68, 71, 73, 70, 69],
//     [73, 75, 76, 79, 82, 81, 81],
//     [34, 35, 32, 35, 39],
//     [75, 76, 78, 80, 78, 80, 85],
//     [91, 92, 95, 95, 98],
//     [22, 25, 25, 26, 27, 29, 31, 28],
//     [27, 30, 31, 31, 34, 36, 39, 39],
//     [55, 56, 56, 58, 62],
//     [25, 28, 28, 31, 34, 39],
//     [57, 60, 63, 64, 68, 70, 72, 73],
//     [60, 62, 65, 69, 72, 70],
//     [46, 47, 48, 52, 54, 54],
//     [19, 22, 23, 25, 29, 33],
//     [83, 84, 86, 90, 91, 93, 98],
//     [41, 42, 44, 49, 52, 55, 56, 57],
//     [16, 19, 21, 24, 27, 34, 37, 36],
//     [27, 29, 32, 35, 38, 43, 43],
//     [30, 31, 33, 40, 43, 47],
//     [39, 40, 41, 47, 48, 49, 56],
//     [83, 81, 83, 85, 86, 89, 91],
//     [48, 46, 49, 52, 54, 55, 53],
//     [73, 71, 73, 74, 75, 78, 78],
//     [71, 70, 71, 73, 74, 77, 79, 83],
//     [39, 36, 38, 41, 42, 44, 45, 52],
//     [86, 85, 86, 84, 86, 87, 89, 91],
//     [44, 42, 45, 48, 46, 45],
//     [86, 85, 86, 89, 87, 87],
//     [4, 1, 2, 1, 5],
//     [46, 45, 44, 46, 47, 50, 56],
//     [89, 86, 86, 89, 90, 91],
//     [73, 71, 72, 75, 76, 77, 77, 76],
//     [24, 22, 23, 23, 25, 27, 27],
//     [29, 28, 29, 29, 33],
//     [69, 66, 69, 69, 71, 73, 76, 83],
//     [61, 59, 63, 65, 67],
//     [67, 66, 70, 71, 69],
//     [53, 50, 53, 57, 59, 60, 60],
//     [72, 70, 72, 76, 80],
//     [38, 35, 38, 42, 49],
//     [50, 48, 51, 58, 61],
//     [70, 68, 70, 76, 73],
//     [61, 60, 61, 67, 69, 69],
//     [30, 27, 29, 31, 33, 38, 42],
//     [4, 1, 2, 5, 8, 14, 16, 23],
//     [12, 12, 15, 16, 19, 21],
//     [37, 37, 39, 40, 38],
//     [2, 2, 5, 7, 9, 10, 11, 11],
//     [3, 3, 6, 7, 11],
//     [18, 18, 20, 23, 30],
//     [70, 70, 72, 73, 70, 73, 75],
//     [38, 38, 40, 37, 39, 42, 43, 42],
//     [71, 71, 74, 73, 73],
//     [65, 65, 64, 67, 68, 71, 75],
//     [35, 35, 36, 37, 36, 43],
//     [30, 30, 31, 31, 32, 35],
//     [93, 93, 95, 95, 96, 94],
//     [27, 27, 27, 30, 32, 33, 36, 36],
//     [36, 36, 36, 38, 40, 44],
//     [18, 18, 20, 21, 22, 25, 25, 30],
//     [62, 62, 64, 68, 70, 73],
//     [90, 90, 94, 95, 96, 99, 97],
//     [44, 44, 48, 49, 51, 51],
//     [68, 68, 69, 73, 75, 79],
//     [60, 60, 64, 66, 72],
//     [20, 20, 22, 24, 31, 33, 36, 37],
//     [34, 34, 37, 43, 45, 43],
//     [58, 58, 63, 64, 67, 67],
//     [54, 54, 60, 61, 64, 67, 71],
//     [67, 67, 68, 70, 77, 80, 86],
//     [75, 79, 81, 84, 87, 89],
//     [45, 49, 51, 53, 50],
//     [5, 9, 12, 15, 17, 19, 19],
//     [47, 51, 54, 55, 56, 60],
//     [76, 80, 81, 83, 86, 89, 90, 97],
//     [83, 87, 89, 88, 91, 92],
//     [29, 33, 31, 34, 31],
//     [51, 55, 57, 60, 57, 59, 59],
//     [35, 39, 40, 39, 40, 44],
//     [1, 5, 8, 5, 8, 13],
//     [74, 78, 79, 79, 80],
//     [57, 61, 61, 62, 65, 63],
//     [4, 8, 8, 10, 10],
//     [67, 71, 74, 74, 77, 81],
//     [42, 46, 47, 50, 50, 55],
//     [36, 40, 41, 45, 47],
//     [53, 57, 60, 64, 67, 64],
//     [6, 10, 11, 13, 17, 17],
//     [78, 82, 84, 88, 90, 94],
//     [79, 83, 86, 89, 93, 98],
//     [34, 38, 45, 46, 49, 52],
//     [50, 54, 59, 62, 64, 66, 65],
//     [58, 62, 69, 71, 72, 72],
//     [56, 60, 65, 66, 67, 71],
//     [22, 26, 28, 30, 32, 37, 38, 44],
//     [84, 89, 91, 93, 94, 95],
//     [58, 63, 64, 67, 65],
//     [36, 41, 44, 47, 50, 52, 55, 55],
//     [62, 67, 68, 69, 73],
//     [70, 77, 80, 81, 84, 86, 92],
//     [68, 73, 74, 71, 72, 75, 78, 81],
//     [73, 79, 76, 79, 76],
//     [53, 58, 55, 56, 57, 58, 59, 59],
//     [31, 36, 34, 37, 40, 44],
//     [37, 43, 41, 43, 50],
//     [14, 20, 22, 22, 25],
//     [70, 75, 77, 80, 80, 81, 84, 83],
//     [51, 56, 59, 59, 59],
//     [2, 8, 9, 12, 12, 14, 16, 20],
//     [50, 55, 57, 58, 60, 60, 65],
//     [58, 63, 64, 66, 70, 72],
//     [81, 88, 90, 93, 97, 95],
//     [26, 33, 37, 39, 41, 41],
//     [74, 80, 82, 86, 90],
//     [26, 33, 37, 38, 44],
//     [68, 75, 81, 82, 83, 84],
//     [13, 18, 19, 21, 26, 27, 29, 27],
//     [53, 59, 60, 66, 69, 70, 70],
//     [17, 22, 29, 30, 33, 35, 38, 42],
//     [42, 47, 48, 49, 50, 52, 58, 65],
//     [84, 83, 81, 79, 76, 78],
//     [61, 58, 55, 54, 54],
//     [77, 75, 73, 70, 67, 63],
//     [86, 85, 84, 83, 80, 77, 76, 70],
//     [44, 41, 42, 39, 38, 37, 35],
//     [22, 19, 16, 13, 16, 13, 11, 14],
//     [86, 85, 84, 87, 86, 86],
//     [32, 31, 30, 29, 31, 28, 24],
//     [18, 15, 12, 9, 7, 9, 7, 1],
//     [84, 81, 81, 78, 76, 74],
//     [11, 10, 7, 6, 6, 4, 3, 5],
//     [20, 19, 19, 18, 18],
//     [16, 13, 13, 10, 6],
//     [99, 96, 94, 91, 89, 86, 86, 80],
//     [27, 24, 23, 22, 21, 17, 16],
//     [50, 49, 45, 43, 42, 39, 38, 39],
//     [85, 83, 79, 78, 75, 75],
//     [19, 16, 12, 10, 9, 8, 4],
//     [28, 27, 23, 21, 16],
//     [91, 88, 83, 80, 77],
//     [17, 16, 14, 9, 11],
//     [74, 71, 66, 64, 64],
//     [40, 38, 33, 30, 28, 24],
//     [66, 64, 63, 56, 53, 46],
//     [33, 34, 33, 32, 31, 28, 27],
//     [52, 54, 52, 50, 47, 46, 43, 46],
//     [60, 63, 61, 59, 57, 54, 54],
//     [82, 84, 82, 81, 78, 77, 74, 70],
//     [36, 39, 37, 35, 28],
//     [67, 69, 66, 64, 67, 65, 64],
//     [45, 46, 45, 48, 51],
//     [83, 84, 82, 83, 81, 80, 80],
//     [33, 36, 38, 36, 32],
//     [88, 91, 88, 87, 89, 86, 80],
//     [43, 44, 42, 39, 39, 38, 37],
//     [35, 36, 36, 33, 30, 31],
//     [3, 4, 4, 2, 2],
//     [77, 79, 76, 74, 74, 71, 67],
//     [89, 92, 92, 90, 88, 87, 85, 79],
//     [45, 48, 44, 41, 40],
//     [33, 36, 33, 30, 28, 27, 23, 25],
//     [66, 69, 68, 65, 61, 59, 57, 57],
//     [88, 89, 88, 84, 80],
//     [46, 47, 43, 42, 36],
//     [97, 98, 96, 94, 89, 88, 87, 84],
//     [11, 14, 12, 5, 3, 6],
//     [80, 83, 82, 81, 74, 74],
//     [24, 26, 23, 16, 12],
//     [63, 64, 57, 54, 48],
//     [86, 86, 85, 83, 82],
//     [24, 24, 21, 20, 21],
//     [56, 56, 53, 52, 51, 51],
//     [60, 60, 58, 55, 54, 50],
//     [93, 93, 90, 87, 86, 83, 78],
//     [13, 13, 16, 13, 12, 11, 8, 7],
//     [64, 64, 63, 66, 64, 66],
//     [50, 50, 49, 51, 51],
//     [34, 34, 33, 32, 35, 31],
//     [82, 82, 79, 77, 80, 78, 73],
//     [47, 47, 47, 46, 43],
//     [95, 95, 95, 94, 96],
//     [48, 48, 48, 45, 44, 44],
//     [18, 18, 18, 16, 14, 10],
//     [87, 87, 85, 84, 84, 83, 81, 75],
//     [72, 72, 68, 67, 66, 63],
//     [65, 65, 64, 61, 57, 55, 52, 54],
//     [91, 91, 90, 86, 86],
//     [46, 46, 42, 39, 35],
//     [53, 53, 51, 50, 47, 44, 40, 33],
//     [85, 85, 78, 76, 75],
//     [70, 70, 68, 63, 61, 62],
//     [47, 47, 44, 38, 35, 33, 31, 31],
//     [79, 79, 78, 72, 68],
//     [73, 73, 68, 65, 58],
//     [75, 71, 69, 68, 65],
//     [52, 48, 46, 43, 40, 38, 35, 37],
//     [21, 17, 15, 12, 12],
//     [41, 37, 35, 32, 28],
//     [88, 84, 83, 81, 78, 72],
//     [68, 64, 61, 63, 61],
//     [18, 14, 15, 12, 13],
//     [62, 58, 56, 53, 54, 51, 51],
//     [24, 20, 18, 19, 15],
//     [93, 89, 87, 89, 84],
//     [41, 37, 35, 34, 34, 33, 32],
//     [44, 40, 39, 36, 36, 34, 35],
//     [22, 18, 16, 16, 16],
//     [86, 82, 80, 77, 77, 74, 73, 69],
//     [34, 30, 29, 28, 27, 26, 26, 19],
//     [93, 89, 87, 83, 80, 79],
//     [59, 55, 54, 51, 47, 46, 45, 47],
//     [20, 16, 13, 12, 8, 6, 4, 4],
//     [27, 23, 20, 17, 15, 14, 10, 6],
//     [25, 21, 17, 16, 11],
//     [98, 94, 88, 87, 84],
//     [65, 61, 58, 55, 52, 47, 44, 46],
//     [32, 28, 26, 20, 20],
//     [82, 78, 77, 74, 72, 67, 63],
//     [55, 51, 49, 47, 45, 44, 37, 32],
//     [36, 31, 28, 27, 26, 23, 21, 20],
//     [90, 85, 83, 80, 77, 76, 74, 76],
//     [15, 10, 8, 7, 6, 5, 3, 3],
//     [57, 51, 49, 46, 45, 44, 42, 38],
//     [29, 24, 21, 20, 19, 13],
//     [82, 76, 74, 72, 71, 72, 69, 66],
//     [10, 4, 7, 4, 5],
//     [37, 32, 34, 32, 29, 28, 26, 26],
//     [56, 50, 52, 50, 46],
//     [53, 46, 49, 47, 46, 45, 43, 38],
//     [76, 71, 68, 68, 65, 64],
//     [88, 81, 81, 79, 77, 74, 76],
//     [83, 76, 76, 73, 73],
//     [66, 59, 59, 58, 54],
//     [98, 93, 92, 90, 90, 84],
//     [27, 22, 18, 17, 14, 11],
//     [29, 24, 20, 19, 17, 15, 18],
//     [81, 76, 74, 71, 67, 65, 62, 62],
//     [69, 63, 60, 56, 55, 51],
//     [86, 81, 77, 74, 67],
//     [74, 67, 62, 59, 58],
//     [66, 60, 55, 54, 56],
//     [53, 46, 39, 37, 35, 33, 33],
//     [29, 23, 20, 14, 10],
//     [33, 28, 27, 26, 19, 16, 15, 8],
//     [60, 61, 56, 55, 51],
//     [97, 91, 88, 87, 86, 80, 81],
//     [74, 73, 68, 67, 64, 60],
//     [23, 21, 17, 15, 12, 12],
//     [47, 53, 55, 56, 59, 60, 63, 65],
//     [38, 38, 38, 36, 34],
//     [69, 62, 59, 57, 54],
//     [13, 13, 12, 9, 8, 7, 7, 9],
//     [32, 34, 34, 37, 39, 41, 42, 43],
//     [81, 77, 75, 74, 75, 73, 72],
//     [2, 3, 5, 7, 12, 14, 11],
//     [43, 43, 41, 40, 40, 39, 33],
//     [27, 25, 27, 28, 32],
//     [47, 51, 53, 55, 62, 63, 69],
//     [29, 32, 34, 33, 30, 26],
//     [51, 58, 60, 61, 65, 68, 68],
//     [66, 69, 68, 69, 71, 73, 73],
//     [84, 84, 86, 83, 79],
//     [59, 60, 56, 53, 51],
//     [15, 20, 22, 23, 27, 29, 32, 39],
//     [4, 11, 12, 10, 11, 13],
//     [39, 35, 33, 31, 33, 31, 31],
//     [29, 30, 32, 33, 35, 35],
//     [84, 83, 84, 84, 87, 88, 91, 96],
//     [20, 15, 14, 11, 12],
//     [16, 16, 14, 15, 14, 13, 11, 12],
//     [49, 43, 41, 37, 38],
//     [9, 16, 20, 22, 25, 28, 32],
//     [18, 18, 19, 21, 25, 26],
//     [72, 74, 75, 78, 82, 82],
//     [19, 23, 28, 31, 35],
//     [86, 79, 78, 74, 70],
//     [14, 14, 17, 14, 15, 18, 22],
//     [59, 52, 51, 54, 51, 48, 46],
//     [1, 1, 2, 5, 7, 12, 11],
//     [54, 50, 49, 47, 43, 43],
//     [81, 85, 86, 87, 88, 89, 87, 90],
//     [7, 8, 11, 13, 16, 22],
//     [4, 10, 7, 8, 12],
//     [70, 64, 63, 60, 62, 62],
//     [6, 6, 9, 14, 16, 18, 21, 28],
//     [56, 61, 58, 60, 62, 67],
//     [44, 37, 35, 31, 28, 26, 21],
//     [14, 18, 20, 23, 27, 27],
//     [44, 44, 42, 39, 37, 37, 35, 31],
//     [95, 95, 97, 99, 97, 99, 96],
//     [62, 64, 61, 61, 58, 55],
//     [52, 58, 58, 59, 60, 61],
//     [30, 28, 30, 33, 33, 36],
//     [51, 47, 44, 41, 40, 37],
//     [81, 78, 76, 73, 75, 72],
//     [23, 24, 28, 30, 33, 35, 38, 40],
//     [12, 10, 7, 5, 4, 4, 5],
//     [16, 19, 19, 22, 26],
//     [79, 80, 83, 82, 83, 86, 88],
//     [76, 69, 66, 65, 62, 62, 61, 62],
//     [14, 13, 7, 5, 4, 7],
//     [56, 50, 48, 45, 45, 41],
//     [62, 64, 65, 69, 73],
//     [64, 68, 71, 72, 75, 74, 74],
//     [43, 47, 51, 54, 56, 59, 63],
//     [60, 56, 53, 51, 50, 47, 46, 42],
//     [75, 78, 77, 77, 75, 75],
//     [53, 53, 57, 60, 61, 66],
//     [82, 85, 84, 82, 80, 82, 79, 74],
//     [66, 61, 58, 51, 49, 47, 46],
//     [35, 39, 39, 40, 42, 44, 48],
//     [42, 35, 34, 31, 28, 21, 20, 20],
//     [94, 87, 85, 86, 83, 79],
//     [53, 55, 56, 59, 62, 66],
//     [10, 9, 13, 14, 12],
//     [19, 25, 27, 29, 32, 39, 39],
//     [79, 77, 80, 82, 85, 82, 79],
//     [39, 35, 33, 34, 33, 30, 26],
//     [64, 71, 73, 76, 83, 85, 84],
//     [64, 65, 63, 66, 70],
//     [73, 74, 81, 84, 85, 85],
//     [34, 34, 35, 36, 36],
//     [63, 69, 70, 72, 75, 81, 84, 88],
//     [66, 70, 77, 79, 82, 85],
//     [80, 81, 79, 75, 68],
//     [91, 87, 86, 85, 82, 80, 83, 86],
//     [50, 50, 56, 59, 62],
//     [2, 7, 7, 10, 14],
//     [61, 62, 66, 67, 68, 70, 71, 70],
//     [43, 43, 45, 47, 47, 48, 48],
//     [29, 27, 24, 18, 16, 9],
//     [17, 21, 23, 23, 29],
//     [84, 77, 75, 74, 73, 70, 63],
//     [32, 30, 29, 26, 22, 21, 16],
//     [25, 18, 15, 17, 14, 12, 9, 3],
//     [82, 85, 88, 90, 92, 90],
//     [21, 18, 21, 18, 21],
//     [76, 82, 82, 83, 85, 87, 87],
//     [52, 50, 47, 42, 41],
//     [22, 26, 28, 29, 30, 30],
//     [17, 17, 18, 18, 20, 22],
//     [26, 26, 22, 20, 14],
//     [34, 32, 37, 38, 40, 43, 45, 46],
//     [60, 60, 62, 65, 62],
//     [20, 17, 20, 21, 24, 27, 34, 34],
//     [41, 40, 41, 42, 43, 47, 50, 50],
//     [56, 49, 45, 42, 42],
//     [21, 21, 25, 26, 29, 30, 32, 36],
//     [48, 44, 44, 43, 40, 38],
//     [94, 93, 91, 93, 92, 88],
//     [70, 73, 70, 69, 64, 63],
//     [42, 46, 47, 50, 54],
//     [25, 26, 24, 22, 19, 17, 19],
//     [95, 95, 94, 92, 90, 93, 90, 88],
//     [23, 22, 24, 23, 27],
//     [75, 76, 75, 72, 71, 68],
//     [74, 73, 71, 70, 69, 66, 59, 59],
//     [14, 20, 22, 24, 26, 29, 27],
//     [15, 18, 22, 23, 24, 29],
//     [50, 50, 51, 54, 56, 57, 59],
//     [41, 39, 39, 41, 43, 44, 47, 51],
//     [22, 22, 19, 19, 18, 18],
//     [63, 63, 66, 68, 69, 70, 74],
//     [21, 20, 19, 18, 16, 13, 12, 5],
//     [72, 69, 66, 66, 65, 61],
//     [61, 68, 69, 71, 74, 75, 75],
//     [81, 75, 74, 73, 72, 66, 60],
//     [18, 18, 19, 19, 20, 22, 19],
//     [78, 74, 72, 69, 65, 64, 61, 62],
//     [30, 26, 24, 21, 19, 19, 19],
//     [76, 76, 78, 79, 80, 78, 78],
//     [32, 38, 40, 43, 50],
//     [63, 56, 56, 54, 54],
//     [81, 82, 81, 79, 79, 81],
//     [85, 85, 86, 86, 87, 88, 94],
//     [65, 61, 59, 56, 49],
//     [1, 5, 8, 10, 8, 10, 9],
//     [63, 64, 67, 67, 68, 69, 67],
//     [44, 44, 45, 49, 49],
//     [87, 83, 82, 79, 82],
//     [54, 59, 60, 63, 64, 67, 70, 74],
//     [13, 12, 11, 9, 8, 8],
//     [30, 32, 31, 30, 24, 21, 16],
//     [77, 75, 72, 71, 73, 70, 67, 67],
//     [86, 86, 91, 93, 93],
//     [70, 70, 67, 62, 60, 59, 58],
//     [44, 50, 51, 57, 59, 60, 62],
//     [84, 84, 90, 91, 95],
//     [42, 46, 47, 50, 53, 58, 58],
//     [31, 27, 25, 25, 28],
//     [1, 1, 4, 1, 1],
//     [47, 52, 52, 54, 57, 64],
//     [38, 36, 38, 37, 37],
//     [49, 49, 45, 43, 42, 41],
//     [20, 19, 26, 28, 33],
//     [50, 53, 55, 54, 56, 63],
//     [19, 26, 30, 33, 35, 34],
//     [73, 73, 76, 79, 82, 82, 86],
//     [40, 36, 33, 32, 35, 29],
//     [50, 51, 53, 54, 60, 67],
//     [68, 72, 74, 77, 79, 81, 81, 84],
//     [76, 79, 82, 84, 91, 94, 98],
//     [8, 6, 7, 9, 11, 11],
//     [56, 50, 48, 48, 46],
//     [14, 17, 14, 14, 10],
//     [9, 13, 18, 19, 17],
//     [57, 58, 55, 55, 52, 50, 49, 43],
//     [85, 82, 80, 77, 74, 71, 68],
//     [80, 81, 82, 84, 86, 88],
//     [17, 19, 20, 21, 23, 24, 25],
//     [85, 83, 81, 80, 78],
//     [50, 47, 46, 44, 42],
//     [71, 69, 66, 65, 63, 62],
//     [80, 78, 75, 73, 70],
//     [28, 29, 32, 33, 34, 36],
//     [36, 33, 30, 28, 25, 22, 20],
//     [66, 68, 70, 71, 74, 75],
//     [36, 33, 32, 30, 29, 27, 26, 23],
//     [67, 66, 64, 62, 61, 59, 58, 55],
//     [45, 43, 40, 39, 36, 34, 31, 30],
//     [25, 23, 20, 19, 16, 15, 14],
//     [67, 65, 63, 60, 59, 58],
//     [3, 6, 9, 10, 12, 15, 17, 20],
//     [45, 42, 40, 38, 37, 34],
//     [67, 69, 72, 74, 77, 80, 81, 84],
//     [86, 84, 82, 80, 77],
//     [13, 11, 10, 7, 6, 4, 2],
//     [18, 20, 21, 23, 26, 28, 31],
//     [79, 80, 83, 85, 88, 89, 92, 95],
//     [70, 72, 74, 76, 77, 78, 81, 82],
//     [43, 45, 48, 51, 52],
//     [66, 63, 62, 61, 60, 57, 55],
//     [15, 12, 11, 8, 5],
//     [86, 83, 82, 81, 78],
//     [75, 78, 81, 82, 85],
//     [28, 29, 32, 33, 36, 38],
//     [72, 75, 78, 80, 81, 83, 86, 88],
//     [23, 21, 18, 16, 14],
//     [98, 96, 94, 93, 90],
//     [76, 75, 74, 71, 69, 68, 65, 62],
//     [66, 65, 64, 61, 60, 57, 54, 53],
//     [73, 71, 70, 67, 66, 65, 62, 59],
//     [41, 44, 45, 48, 50, 53],
//     [27, 24, 23, 22, 19],
//     [17, 14, 13, 12, 10, 9, 6, 5],
//     [36, 33, 30, 28, 26, 24, 21],
//     [94, 92, 89, 88, 85],
//     [50, 53, 55, 57, 60, 61],
//     [62, 65, 66, 69, 70, 73],
//     [47, 46, 44, 41, 38, 35, 34, 31],
//     [48, 51, 53, 54, 55, 56, 59],
//     [78, 79, 80, 81, 82, 85, 87, 89],
//     [51, 54, 56, 58, 61, 64, 65],
//     [50, 52, 53, 54, 55, 58, 61, 62],
//     [76, 75, 74, 71, 69, 66, 64],
//     [61, 64, 67, 69, 70, 72, 73],
//     [75, 74, 72, 71, 70, 67],
//     [38, 39, 41, 42, 43, 45, 46],
//     [76, 79, 81, 84, 85, 86, 89, 91],
//     [59, 58, 57, 56, 55, 54, 51, 50],
//     [88, 85, 84, 82, 81, 80, 79, 76],
//     [15, 12, 9, 8, 7, 4, 1],
//     [37, 36, 34, 33, 31, 30, 29],
//     [66, 69, 72, 74, 77, 78, 79, 81],
//     [54, 51, 49, 46, 44],
//     [65, 63, 60, 59, 58],
//     [31, 33, 34, 36, 39, 40],
//     [7, 10, 11, 13, 15, 18, 21],
//     [17, 19, 21, 23, 24, 27, 29, 30],
//     [33, 30, 27, 24, 23, 22, 20, 18],
//     [47, 46, 45, 44, 42, 39, 36, 35],
//     [45, 42, 40, 38, 37],
//     [31, 33, 34, 37, 40, 41, 42, 44],
//     [95, 93, 90, 89, 86, 84, 82],
//     [53, 50, 49, 47, 45, 43, 41, 39],
//     [38, 37, 34, 31, 30, 27, 26],
//     [48, 50, 52, 53, 54],
//     [9, 10, 12, 13, 16, 17, 18, 19],
//     [75, 77, 80, 83, 85],
//     [39, 40, 43, 45, 48, 49],
//     [89, 90, 92, 94, 95, 98, 99],
//     [78, 77, 76, 74, 73, 71],
//     [32, 35, 36, 38, 39, 42],
//     [95, 94, 93, 90, 89, 86, 83, 82],
//     [63, 62, 59, 57, 54, 52, 49, 46],
//     [45, 46, 47, 49, 52, 54],
//     [86, 85, 84, 83, 80, 77],
//     [61, 58, 56, 54, 53],
//     [42, 40, 38, 35, 32, 30],
//     [86, 87, 90, 91, 93, 94, 96, 99],
//     [45, 48, 51, 53, 56],
//     [49, 50, 51, 53, 55, 57],
//     [16, 15, 13, 10, 8, 7, 6],
//     [37, 40, 41, 43, 46],
//     [83, 82, 79, 76, 75],
//     [9, 12, 15, 18, 20],
//     [31, 30, 29, 27, 24, 22],
//     [30, 33, 35, 37, 39, 41, 43],
//     [25, 22, 20, 19, 16, 15, 13, 12],
//     [53, 51, 48, 45, 42, 39, 37],
//     [30, 29, 27, 26, 25, 23, 20, 18],
//     [36, 38, 41, 42, 43, 44, 46, 49],
//     [22, 21, 18, 15, 14, 11, 9],
//     [46, 47, 48, 51, 54],
//     [39, 41, 44, 45, 47, 49, 51],
//     [52, 50, 48, 45, 42, 41],
//     [38, 39, 42, 45, 48, 50, 53, 56],
//     [50, 51, 53, 56, 58, 59],
//     [86, 85, 83, 80, 78, 76, 75, 73],
//     [59, 58, 57, 54, 51],
//     [22, 24, 25, 27, 29, 30, 32, 35],
//     [11, 13, 15, 16, 19, 21],
//     [36, 33, 31, 29, 28, 27, 25, 22],
//     [43, 42, 39, 37, 35, 33, 31, 30],
//     [69, 67, 66, 64, 61],
//     [80, 77, 75, 72, 70, 68, 67],
//     [55, 57, 60, 63, 66, 68],
//     [80, 77, 76, 73, 72],
//     [19, 17, 15, 14, 13],
//     [50, 48, 45, 44, 42],
//     [6, 7, 10, 13, 14],
//     [50, 52, 55, 57, 60],
//     [67, 64, 62, 60, 59, 56, 54, 52],
//     [25, 28, 30, 32, 35],
//     [80, 77, 76, 73, 72, 70, 69],
//     [36, 35, 32, 29, 28, 27, 26, 25],
//     [64, 62, 61, 60, 57, 54],
//     [76, 78, 79, 81, 84, 87, 90, 91],
//     [69, 71, 72, 75, 78],
//     [22, 19, 16, 15, 13, 12, 11],
//     [95, 92, 91, 88, 86, 84, 81],
//     [76, 79, 80, 82, 83, 86, 88, 89],
//     [25, 26, 28, 29, 30, 32],
//     [4, 7, 10, 12, 15],
//     [70, 71, 74, 77, 78, 81],
//     [27, 29, 32, 35, 38, 41, 44, 46],
//     [73, 72, 69, 66, 64],
//     [17, 14, 13, 10, 7, 5],
//     [47, 44, 42, 40, 37, 36],
//     [28, 30, 32, 33, 34, 37, 39, 41],
//     [86, 88, 89, 90, 93],
//     [79, 78, 76, 74, 71],
//     [44, 46, 47, 48, 51, 53, 54],
//     [82, 84, 87, 88, 91, 92, 95, 96],
//     [24, 22, 21, 18, 16, 14],
//     [48, 47, 46, 45, 42],
//     [73, 76, 77, 80, 81],
//     [29, 28, 27, 26, 24],
//     [59, 56, 54, 52, 49, 47],
//     [43, 45, 46, 49, 51, 53, 56, 59],
//     [25, 24, 23, 21, 18, 16, 13, 12],
//     [60, 59, 57, 54, 52, 50],
//     [23, 20, 18, 15, 14, 12],
//     [53, 55, 56, 58, 59, 60],
//     [86, 89, 92, 94, 96],
//     [21, 20, 18, 16, 14, 11],
//     [61, 63, 66, 68, 70, 71, 73],
//     [49, 46, 45, 42, 40, 38, 37],
//     [9, 11, 14, 16, 19, 20],
//     [41, 39, 36, 33, 30, 28, 25, 23],
//     [52, 54, 55, 56, 57, 58, 59, 62],
//     [20, 18, 15, 13, 11, 10],
//     [62, 60, 57, 56, 53, 52, 50, 49],
//     [69, 72, 75, 77, 79, 81],
//     [80, 81, 84, 87, 90, 92, 93],
//     [34, 32, 31, 28, 26, 24, 22],
//     [21, 20, 18, 15, 14, 11, 9, 6],
//     [89, 87, 86, 83, 80, 79, 77, 74],
//     [29, 32, 33, 34, 35, 37, 38],
//     [29, 27, 26, 24, 21, 18],
//     [38, 41, 42, 45, 46, 49, 50],
//     [63, 64, 67, 69, 71, 73, 74],
//     [40, 42, 45, 48, 49],
//     [17, 18, 19, 21, 22, 23],
//     [5, 6, 9, 10, 13, 15, 17],
//     [44, 47, 50, 52, 55, 58, 60, 62],
//     [28, 25, 24, 21, 18, 16, 15],
//     [39, 38, 36, 35, 34, 33, 31],
//     [78, 76, 75, 74, 73, 70],
//     [69, 68, 65, 64, 63],
//     [80, 82, 83, 85, 88, 91, 94, 96],
//     [76, 74, 71, 70, 69, 68],
//     [81, 84, 86, 88, 89],
//     [40, 42, 44, 45, 46, 48, 51, 53],
//     [50, 51, 52, 54, 55, 57],
//     [57, 60, 62, 63, 65, 67, 70],
//     [46, 45, 42, 39, 37, 36],
//     [72, 71, 70, 68, 66],
//     [37, 40, 42, 45, 47],
//     [53, 56, 58, 59, 62],
//     [87, 85, 84, 82, 79, 77, 75, 72],
//     [82, 81, 80, 77, 74, 71, 70],
//     [28, 30, 31, 32, 33],
//     [37, 36, 33, 30, 27, 26, 24, 22],
//     [60, 59, 58, 56, 54],
//     [86, 85, 83, 80, 78, 75, 72, 71],
//     [20, 21, 22, 25, 27],
//     [39, 41, 43, 44, 47, 48, 49, 50],
//     [33, 32, 29, 27, 26, 23, 20, 18],
//     [40, 37, 36, 33, 31, 30],
//     [23, 25, 28, 30, 32, 35],
//     [82, 81, 79, 76, 75, 73, 71, 68],
//     [79, 77, 76, 75, 73, 72, 70, 69],
//     [82, 85, 86, 89, 91, 94, 97],
//     [87, 88, 90, 91, 93],
//     [14, 17, 19, 20, 22, 25, 26, 27],
//     [82, 79, 76, 75, 72, 70, 68],
//     [88, 87, 84, 81, 79, 77],
//     [15, 13, 12, 10, 9, 8, 7],
//     [1, 2, 5, 6, 9, 11],
//     [20, 18, 15, 14, 12, 11, 9, 6],
//     [11, 9, 6, 3, 1],
//     [66, 65, 63, 60, 57, 54],
//     [64, 63, 62, 61, 58, 57],
//     [79, 77, 75, 74, 72],
//     [62, 60, 59, 58, 57, 54, 53],
//     [17, 16, 13, 10, 8],
//     [59, 62, 64, 65, 68, 69],
//     [82, 80, 79, 77, 74, 72],
//     [16, 13, 11, 8, 7, 4],
//     [17, 14, 12, 9, 7, 4],
//     [46, 45, 43, 40, 39, 36, 33],
//     [85, 86, 87, 89, 92, 94, 96, 99],
//     [50, 52, 55, 57, 60, 62],
//     [64, 65, 67, 68, 70, 73, 76, 79],
//     [54, 53, 51, 49, 47, 44, 42, 39],
//     [29, 30, 31, 34, 35, 36, 38],
//     [40, 37, 34, 33, 31, 30, 27, 24],
//     [68, 70, 71, 74, 76, 77, 78],
//     [62, 61, 59, 58, 57, 56, 55, 52],
//     [4, 5, 8, 9, 12, 13],
//     [89, 86, 85, 82, 80, 79],
//     [5, 8, 9, 10, 13, 14, 17],
//     [84, 82, 81, 78, 76, 73, 71],
//     [84, 86, 87, 90, 93, 96, 97],
//     [32, 31, 29, 28, 26, 23],
//     [17, 19, 21, 23, 26, 29, 31],
//     [62, 65, 66, 67, 69, 72],
//     [43, 45, 47, 48, 50, 52, 55],
//     [36, 35, 34, 33, 31, 29, 27],
//     [18, 15, 14, 13, 11],
//     [36, 35, 32, 30, 27],
//     [13, 16, 17, 19, 20, 21, 23],
//     [98, 97, 95, 93, 90, 87, 86],
//     [95, 93, 91, 90, 88, 85, 82],
//     [28, 26, 24, 21, 19, 18, 16, 13],
//     [61, 58, 57, 54, 53, 51, 49, 47],
//     [81, 84, 86, 88, 90, 92, 93],
//     [45, 46, 49, 50, 51],
//     [48, 51, 53, 54, 56, 57, 58, 60],
//     [73, 70, 69, 68, 66, 64],
//     [75, 72, 70, 67, 65, 64, 62],
//     [50, 48, 45, 42, 41, 38, 37, 36],
//     [44, 42, 39, 37, 34, 32],
//     [46, 45, 44, 42, 40],
//     [51, 48, 46, 44, 41, 39, 37],
//     [19, 18, 16, 15, 12, 11],
//     [39, 40, 42, 45, 46],
//     [76, 77, 78, 81, 82, 83, 86, 87],
//     [90, 89, 88, 85, 83, 82, 81, 79],
//     [72, 74, 76, 78, 79, 80],
//     [65, 66, 67, 68, 70, 72],
//     [49, 51, 54, 56, 59, 62, 63],
//     [37, 35, 32, 30, 28, 25, 24, 22],
//     [90, 87, 86, 84, 82],
//     [61, 64, 65, 67, 68, 71, 74, 77],
//     [1, 3, 4, 7, 10],
//     [61, 60, 59, 58, 57, 55, 54, 52],
//     [6, 8, 9, 11, 13, 14, 17, 19],
//     [56, 57, 58, 59, 61, 63],
//     [58, 60, 63, 66, 67],
//     [22, 20, 17, 16, 15, 14, 13, 10],
//     [66, 63, 62, 60, 57, 56, 55, 53],
//     [61, 64, 67, 70, 71, 74, 77],
//     [88, 86, 84, 82, 80, 78, 77, 75],
//     [6, 9, 11, 14, 16],
//     [75, 76, 79, 82, 83, 85, 86],
//     [78, 79, 80, 81, 84, 85],
//     [14, 11, 8, 5, 2, 1],
//     [24, 27, 30, 31, 32, 35],
//     [85, 84, 83, 80, 77],
//     [68, 71, 74, 76, 79, 81, 82, 85],
//     [21, 19, 17, 16, 14, 11, 9],
//     [93, 92, 90, 87, 85],
//     [80, 78, 76, 75, 72, 69],
//     [84, 87, 88, 90, 93, 94, 97],
//     [54, 53, 50, 49, 48, 45],
//     [41, 42, 44, 45, 47],
//     [24, 26, 29, 32, 35, 38, 39, 41],
//     [54, 52, 49, 47, 44, 42, 41, 40],
//     [39, 42, 43, 44, 45, 48, 50],
//     [82, 81, 79, 76, 73, 71],
//     [70, 67, 65, 64, 63, 61],
//     [57, 56, 53, 51, 49, 46],
//     [74, 76, 79, 81, 83, 85, 87, 90],
//     [56, 59, 61, 64, 67, 70, 71],
//     [31, 29, 28, 27, 24, 23],
//     [59, 57, 55, 52, 50],
//     [82, 85, 88, 91, 94, 95, 97],
//     [60, 58, 55, 53, 51],
//     [57, 58, 60, 63, 65, 68],
//     [41, 44, 46, 48, 50, 51, 53],
//     [44, 46, 47, 50, 53],
//     [33, 34, 36, 38, 41, 42, 44],
//     [18, 20, 22, 23, 26, 28, 29],
//     [51, 48, 47, 45, 44, 42],
//     [23, 21, 19, 17, 14, 12],
//     [58, 56, 53, 52, 49, 47, 46, 44],
//     [98, 96, 95, 94, 91],
//     [80, 78, 76, 75, 73],
//     [58, 61, 63, 64, 66],
//     [83, 85, 87, 88, 89],
//     [23, 21, 19, 17, 15, 14, 12, 9],
//     [60, 62, 63, 64, 65, 68],
//     [42, 41, 38, 37, 36, 33],
//     [93, 92, 90, 88, 87, 86, 84, 82],
//     [31, 32, 34, 36, 39, 42],
//     [8, 10, 12, 13, 16, 17, 18, 19],
//     [14, 17, 18, 20, 23, 24],
//     [8, 11, 13, 14, 17, 18, 21],
//     [69, 68, 66, 63, 61, 58, 55],
//     [90, 87, 85, 82, 80, 79],
//     [38, 35, 32, 30, 28],
//     [18, 20, 23, 26, 28, 29, 30],
//     [17, 16, 13, 10, 8, 7, 5],
//     [83, 82, 80, 77, 75, 72, 69, 66],
//     [87, 88, 89, 92, 94],
//     [69, 71, 72, 74, 76, 78, 81, 82],
//     [49, 46, 43, 40, 37, 34, 33],
//     [30, 28, 26, 24, 23, 20],
//     [44, 43, 40, 39, 37, 34, 33, 31],
//     [21, 23, 26, 29, 32, 33, 34, 36],
//     [61, 59, 58, 56, 54, 52, 50, 48],
//     [53, 50, 49, 48, 45, 42],
//     [63, 66, 68, 71, 73, 76],
//     [57, 55, 53, 50, 49],
//     [54, 57, 60, 62, 65],
//     [21, 22, 25, 27, 29, 30],
//     [12, 14, 15, 18, 20, 21, 22, 23],
//     [68, 71, 73, 74, 76, 77, 80],
//     [15, 13, 12, 9, 6, 5, 2],
//     [35, 37, 40, 41, 42, 45, 46],
//     [56, 55, 53, 52, 50],
//     [38, 39, 42, 43, 44],
//     [48, 46, 45, 43, 42],
//     [95, 92, 91, 88, 86, 84, 83, 80],
//     [48, 51, 52, 55, 58],
//     [40, 42, 44, 46, 49, 51]
// ];

// ================================================= IN PROGRESS =======================================================================
let arr = [
    [1, 2, 7, 8, 9],
    [9, 7, 6, 2, 1],
    [1, 3, 2, 4, 5], //Safe
    [7, 6, 4, 2, 1], //Safe
    [8, 6, 4, 4, 1], //Safe
    [1, 3, 6, 7, 9]
]; //Safe

let safeCounter = 0;

for (let i = 0; i < arr.length; i++) {
    // Start Values
    let diffArr = [];
    let tempArr = [];
    let boo = true;

    // For Loop to check wether
    for (let j = 1; j < arr[i].length; j++) {
        let diff = arr[i][j] - arr[i][j - 1];

        if (diff > 3 || diff < -3 || diff === 0) {
            boo = false;
            let dupliCount = 0;

            tempArr = arr[i].filter((el) => {
                if (el === arr[i][j - 1]) {
                    if (dupliCount === 1) {
                        return true;
                    }
                    dupliCount++;

                    return false;
                }
                    return true;

            });

            break;
        } else {
            diffArr.push(diff);
        }
    }

    if (tempArr.length > 1) {
        for (let j = 1; j < tempArr.length; j++) {
            let diff = tempArr[j] - tempArr[j - 1];

            if (diff > 3 || diff < -3 || diff === 0) {
                boo = false;
                break;
            } else {
                boo = true;
                diffArr.push(diff);
            }
        }
    }
    console.log("1", boo);

    if (boo) {
        console.log(diffArr);

        for (let j = 0; j < diffArr.length; j++) {
            let isInc = diffArr[0] > 0;

            if (isInc) {
                if (!(diffArr[j] > 0)) {
                    boo = false;
                    break;
                }
            } else {
                if (!(diffArr[j] < 0)) {
                    boo = false;
                    break;
                }
            }
        }
        console.log("2", boo);
        if (boo) safeCounter++;
    } else continue;
}
console.log("safe =======", safeCounter);
