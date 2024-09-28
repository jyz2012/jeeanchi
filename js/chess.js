const chess = {
	noneChess: {
	  type: 'none', // 棋子类型
	},
	carChess: {
	  type: 'car', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '车', // 红色阵营棋子名称
	  name2: '車', // 黑色阵营棋子名称
	},
	horseChess: {
	  type: 'horse', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '马', // 红色阵营棋子名称
	  name2: '馬', // 黑色阵营棋子名称
	},
	elephantChess: {
	  type: 'elephant', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '象', // 红色阵营棋子名称
	  name2: '相', // 黑色阵营棋子名称
	},
	scholarChess: {
	  type: 'scholar', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '士', // 红色阵营棋子名称
	  name2: '仕', // 黑色阵营棋子名称
	},
	generalChess: {
	  type: 'general', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '将', // 红色阵营棋子名称
	  name2: '帅', // 黑色阵营棋子名称
	},
	gunChess: {
	  type: 'gun', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '炮', // 红色阵营棋子名称
	  name2: '砲', // 黑色阵营棋子名称
	},
	soldierChess: {
	  type: 'soldier', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '卒', // 红色阵营棋子名称
	  name2: '兵', // 黑色阵营棋子名称
	},
	spyChess: {
	  type: 'spy', // 棋子类型
	  camp: '', // red红色阵营;black黑色阵营
	  name1: '间', // 红色阵营棋子名称
	  name2: '奸', // 黑色阵营棋子名称
	}
}

const role = {
	// 无棋子
	'none': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			return selectPositionArray;
		},
	},
	// 车
	'car': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			// xIndex不变，寻找当前行中的可选点
			// 寻找左方可选点
			for(var j=yIndex-1;j>=0;j--){
				var nowChess = chessPosition[xIndex][j]
				if(!nowChess || nowChess.type == 'none')
					// 无棋子
					selectPositionArray[xIndex][j] = 1
				else if(isEat(chess, nowChess)) {
					// 有棋子且能吃
					selectPositionArray[xIndex][j] = 1
					break
				} else {
					// 有棋子但不能吃
					break
				}
			}
			// 寻找右方可选点
			for(var j=yIndex+1;j<9;j++){
				var nowChess = chessPosition[xIndex][j]
				if(!nowChess || nowChess.type == 'none')
					// 无棋子
					selectPositionArray[xIndex][j] = 1
				else if(isEat(chess, nowChess)) {
					// 有棋子且能吃
					selectPositionArray[xIndex][j] = 1
					break
				} else {
					// 有棋子但不能吃
					break
				}
			}
			// yIndex不变，寻找当前列中的可选点
			// 寻找上方可选点
			for(var i=xIndex-1;i>=0;i--){
				var nowChess = chessPosition[i][yIndex]
				if(!nowChess || nowChess.type == 'none')
					// 无棋子
					selectPositionArray[i][yIndex] = 1
				else if(isEat(chess, nowChess)) {
					// 有棋子且能吃
					selectPositionArray[i][yIndex] = 1
					break
				} else {
					// 有棋子但不能吃
					break
				}
			}
			// 寻找下方可选点
			for(var i=xIndex+1;i<10;i++){
				var nowChess = chessPosition[i][yIndex]
				if(!nowChess || nowChess.type == 'none')
					// 无棋子
					selectPositionArray[i][yIndex] = 1
				else if(isEat(chess, nowChess)) {
					// 有棋子且能吃
					selectPositionArray[i][yIndex] = 1
					break
				} else {
					// 有棋子但不能吃
					break
				}
			}
			return selectPositionArray;
		},
	},
	// 炮
	'gun': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			// xIndex不变，寻找当前行中的可选点
			// 是否有跳板
			var haveGunCarriage = false
			// 寻找左方可选点
			for(var j=yIndex-1;j>=0;j--){
				var nowChess = chessPosition[xIndex][j]
				if(!haveGunCarriage) {
					// 未找到炮架的情况下,无棋子则位置可选
					if(!nowChess || nowChess.type == 'none')
						// 无棋子
						selectPositionArray[xIndex][j] = 1
					else
						// 找到棋子,此时该棋子作为炮架
						haveGunCarriage = true
				} else {
					// 有炮架的情况下,找到第一个棋子，然后判断是否能吃
					if(nowChess && nowChess.type != 'none') {
						if(isEat(chess, nowChess)) {
							selectPositionArray[xIndex][j] = 1
						}
						break;
					}
				}
			}
			// 是否有跳板
			haveGunCarriage = false
			// 寻找右方可选点
			for(var j=yIndex+1;j<9;j++){
				var nowChess = chessPosition[xIndex][j]
				if(!haveGunCarriage) {
					// 未找到炮架的情况下,无棋子则位置可选
					if(!nowChess || nowChess.type == 'none')
						// 无棋子
						selectPositionArray[xIndex][j] = 1
					else
						// 找到棋子,此时该棋子作为炮架
						haveGunCarriage = true
				} else {
					// 有炮架的情况下,找到第一个棋子，然后判断是否能吃
					if(nowChess && nowChess.type != 'none') {
						if(isEat(chess, nowChess)) {
							selectPositionArray[xIndex][j] = 1
						}
						break;
					}
				}
			}
			// yIndex不变，寻找当前列中的可选点
			// 是否有跳板
			haveGunCarriage = false
			// 寻找上方可选点
			for(var i=xIndex-1;i>=0;i--){
				var nowChess = chessPosition[i][yIndex]
				if(!haveGunCarriage) {
					// 未找到炮架的情况下,无棋子则位置可选
					if(!nowChess || nowChess.type == 'none')
						// 无棋子
						selectPositionArray[i][yIndex] = 1
					else
						// 找到棋子,此时该棋子作为炮架
						haveGunCarriage = true
				} else {
					// 有炮架的情况下,找到第一个棋子，然后判断是否能吃
					if(nowChess && nowChess.type != 'none') {
						if(isEat(chess, nowChess)) {
							selectPositionArray[i][yIndex] = 1
						}
						break;
					}
				}
			}
			// 是否有跳板
			haveGunCarriage = false
			// 寻找下方可选点
			for(var i=xIndex+1;i<10;i++){
				var nowChess = chessPosition[i][yIndex]
				if(!haveGunCarriage) {
					// 未找到炮架的情况下,无棋子则位置可选
					if(!nowChess || nowChess.type == 'none')
						// 无棋子
						selectPositionArray[i][yIndex] = 1
					else
						// 找到棋子,此时该棋子作为炮架
						haveGunCarriage = true
				} else {
					// 有炮架的情况下,找到第一个棋子，然后判断是否能吃
					if(nowChess && nowChess.type != 'none') {
						if(isEat(chess, nowChess)) {
							selectPositionArray[i][yIndex] = 1
						}
						break;
					}
				}
			}
			return selectPositionArray;
		},
	},
	// 马
	'horse': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			// 直行2格横1格
			// xIndex不变，先横向移动两格寻找可选点
			// 寻找左方可选点
			if(yIndex>=2) {
				if(isNone(chessPosition, xIndex, yIndex-1)) {
					// 没有蹩马腿
					if(xIndex >= 1) {
						if(isNone(chessPosition, xIndex-1, yIndex-2)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex-1][yIndex-2] = 1
						} else if (isEat(chess, chessPosition[xIndex-1][yIndex-2])) {
							// 可以吃
							selectPositionArray[xIndex-1][yIndex-2] = 1
						}
					}
					if(xIndex <= 8) {
						if(isNone(chessPosition, xIndex+1, yIndex-2)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex+1][yIndex-2] = 1
						} else if (isEat(chess, chessPosition[xIndex+1][yIndex-2])) {
							// 可以吃
							selectPositionArray[xIndex+1][yIndex-2] = 1
						}
					}
				}
			}
			// 寻找右方可选点
			if(yIndex<=6) {
				if(isNone(chessPosition, xIndex, yIndex+1)) {
					// 没有蹩马腿
					if(xIndex >= 1) {
						if(isNone(chessPosition, xIndex-1, yIndex+2)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex-1][yIndex+2] = 1
						} else if (isEat(chess, chessPosition[xIndex-1][yIndex+2])) {
							// 可以吃
							selectPositionArray[xIndex-1][yIndex+2] = 1
						}
					}
					if(xIndex <= 8) {
						if(isNone(chessPosition, xIndex+1, yIndex+2)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex+1][yIndex+2] = 1
						} else if (isEat(chess, chessPosition[xIndex+1][yIndex+2])) {
							// 可以吃
							selectPositionArray[xIndex+1][yIndex+2] = 1
						}
					}
				}
			}
			// yIndex不变，先纵向移动两格寻找可选点
			// 寻找上方可选点
			if(xIndex>=2) {
				if(isNone(chessPosition, xIndex-1, yIndex)) {
					// 没有蹩马腿
					if(yIndex >= 1) {
						if(isNone(chessPosition, xIndex-2, yIndex-1)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex-2][yIndex-1] = 1
						} else if (isEat(chess, chessPosition[xIndex-2][yIndex-1])) {
							// 可以吃
							selectPositionArray[xIndex-2][yIndex-1] = 1
						}
					}
					if(yIndex <= 7) {
						if(isNone(chessPosition, xIndex-2, yIndex+1)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex-2][yIndex+1] = 1
						} else if (isEat(chess, chessPosition[xIndex-2][yIndex+1])) {
							// 可以吃
							selectPositionArray[xIndex-2][yIndex+1] = 1
						}
					}
				}
			}
			// 寻找下方可选点
			if(xIndex<=7) {
				if(isNone(chessPosition, xIndex+1, yIndex)) {
					// 没有蹩马腿
					if(yIndex >= 1) {
						if(isNone(chessPosition, xIndex+2, yIndex-1)) {
							// 空棋子,可以直接跳
							selectPositionArray[xIndex+2][yIndex-1] = 1
						} else if (isEat(chess, chessPosition[xIndex+2][yIndex-1])) {
							// 可以吃
							selectPositionArray[xIndex+2][yIndex-1] = 1
						}
					}
					if(yIndex <= 7) {
						if(isNone(chessPosition, xIndex+2, yIndex+1)) {
							selectPositionArray[xIndex+2][yIndex+1] = 1
						} else if (isEat(chess, chessPosition[xIndex+2][yIndex+1])) {
							// 可以吃
							selectPositionArray[xIndex+2][yIndex+1] = 1
						}
					}
				}
			}
			
			return selectPositionArray;
		},
	},
	// 象
	'elephant': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			// 直行2格横2格
			if((xIndex >= 2 && xIndex <= 4) || xIndex >= 7) {
				if(yIndex >= 2) {
					if(isNone(chessPosition, xIndex-1, yIndex-1)) {
						// 没有堵象眼
						if(isNone(chessPosition, xIndex-2,yIndex-2) || isEat(chess, chessPosition[xIndex-2][yIndex-2]))
							// 目标点空棋子或可吃
							selectPositionArray[xIndex-2][yIndex-2] = 1
					}
				}
				if(yIndex <= 6) {
					if(isNone(chessPosition, xIndex-1, yIndex+1)) {
						// 没有堵象眼
						if(isNone(chessPosition, xIndex-2,yIndex+2) || isEat(chess, chessPosition[xIndex-2][yIndex+2]))
							// 目标点空棋子或可吃
							selectPositionArray[xIndex-2][yIndex+2] = 1
					}
				}
			}
			if(xIndex <= 2 || (xIndex >= 5 && xIndex <= 7)) {
				if(yIndex >= 2) {
					if(isNone(chessPosition, xIndex+1, yIndex-1)) {
						// 没有堵象眼
						if(isNone(chessPosition, xIndex+2,yIndex-2) || isEat(chess, chessPosition[xIndex+2][yIndex-2]))
							// 目标点空棋子或可吃
							selectPositionArray[xIndex+2][yIndex-2] = 1
					}
				}
				if(yIndex <= 6) {
					if(isNone(chessPosition, xIndex+1, yIndex+1)) {
						// 没有堵象眼
						if(isNone(chessPosition, xIndex+2,yIndex+2) || isEat(chess, chessPosition[xIndex+2][yIndex+2]))
							// 目标点空棋子或可吃
							selectPositionArray[xIndex+2][yIndex+2] = 1
					}
				}
			}
			return selectPositionArray;
		},
	},
	// 士
	'scholar': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			if(xIndex != 0) {
				if(isEat(chess, chessPosition[xIndex-1][yIndex-1]))
					selectPositionArray[xIndex-1][yIndex-1] = 1
				if(isEat(chess, chessPosition[xIndex-1][yIndex+1]))
					selectPositionArray[xIndex-1][yIndex+1] = 1
			}
			if(xIndex != 9) {
				if(isEat(chess, chessPosition[xIndex+1][yIndex-1]))
					selectPositionArray[xIndex+1][yIndex-1] = 1
				if(isEat(chess, chessPosition[xIndex+1][yIndex+1]))
					selectPositionArray[xIndex+1][yIndex+1] = 1
			}
			if(chess.type == 'scholar') {
				for(var i=0;i<selectPositionArray.length;i++){
					for(var j=0;j<selectPositionArray[i].length;j++){
						if((i>2&&i<7))
							selectPositionArray[i][j]=0
						else if(j<3||j>5)
							selectPositionArray[i][j]=0
					}
				}
			}
			return selectPositionArray;
		},
	},
	// 将
	'general': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			if(xIndex != 0) {
				if(isEat(chess, chessPosition[xIndex-1][yIndex]))
					selectPositionArray[xIndex-1][yIndex] = 1
			}
			if(xIndex != 9) {
				if(isEat(chess, chessPosition[xIndex+1][yIndex]))
					selectPositionArray[xIndex+1][yIndex] = 1
			}
			if(isEat(chess, chessPosition[xIndex][yIndex-1]))
				selectPositionArray[xIndex][yIndex-1] = 1
			if(isEat(chess, chessPosition[xIndex][yIndex+1]))
				selectPositionArray[xIndex][yIndex+1] = 1
			if(chess.type == 'general') {
				if(xIndex < 5) {
					for(var i=xIndex+1;i<10;i++){
						if(!isNone(chessPosition, i, yIndex)) {
							if(chessPosition[i][yIndex].type == 'general'){
								console.log( i, yIndex)
								selectPositionArray[i][yIndex] = 1
							}
							break
						}
					}
				} else {
					for(var i=xIndex-1;i>=0;i--){
						if(!isNone(chessPosition, i, yIndex)) {
							if(chessPosition[i][yIndex].type == 'general')
								selectPositionArray[i][yIndex] = 1
							break
						}
					}
				}
				for(var i=0;i<selectPositionArray.length;i++){
					for(var j=0;j<selectPositionArray[i].length;j++){
						if((i>2&&i<7))
							selectPositionArray[i][j]=0
						else if(j<3||j>5)
							selectPositionArray[i][j]=0
					}
				}
			}
			return selectPositionArray;
		},
	},
	// 兵
	'soldier': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			if(chess.camp == 'red') {
				if(xIndex != 0 && isEat(chess, chessPosition[xIndex-1][yIndex]))
					selectPositionArray[xIndex-1][yIndex] = 1
				if(xIndex < 5) {
					if(yIndex != 0 && isEat(chess, chessPosition[xIndex][yIndex-1]))
						selectPositionArray[xIndex][yIndex-1] = 1
					if(yIndex != 8 && isEat(chess, chessPosition[xIndex][yIndex+1]))
						selectPositionArray[xIndex][yIndex+1] = 1
				}
			} else {
				if(xIndex != 9 && isEat(chess, chessPosition[xIndex+1][yIndex]))
					selectPositionArray[xIndex+1][yIndex] = 1
				if(xIndex > 4) {
					if(yIndex != 0 && isEat(chess, chessPosition[xIndex][yIndex-1]))
						selectPositionArray[xIndex][yIndex-1] = 1
					if(yIndex != 8 && isEat(chess, chessPosition[xIndex][yIndex+1]))
						selectPositionArray[xIndex][yIndex+1] = 1
				}
			}
			return selectPositionArray;
		},
	},
	// 奸
	'spy': {
		// chessPosition棋盘内的棋子
		// chess当前对象
		// xIndex行索引
		// yIndex列索引
		// 返回10*9的二维数组,数组元素1表示可以选择,0表示不可选择
		getSelectPosition: function(chessPosition, chess, xIndex, yIndex) {
			var selectPositionArray = [];
			// 初始设置为所有位置不可选
			for(var i=0;i<10;i++){
				selectPositionArray.push([])
				for(var j=0;j<9;j++){
					selectPositionArray[i].push(0)
				}
			}
			if(chess.camp == 'red' && xIndex == 8 && yIndex == 4) {
				// 奸位于初始位置时,可以选择敌方任意非空位置
				for(var i=0;i<5;i++){
					for(var j=0;j<9;j++){
						var nowChess = chessPosition[i][j]
						if(!nowChess||nowChess.type=='none')
							selectPositionArray[i][j] = 1
					}
				}
			} else if(chess.camp == 'black' && xIndex == 1 && yIndex == 4) {
				// 奸位于初始位置时,可以选择敌方任意非空位置
				for(var i=5;i<10;i++){
					for(var j=0;j<9;j++){
						var nowChess = chessPosition[i][j]
						if(!nowChess||nowChess.type=='none')
							selectPositionArray[i][j] = 1
					}
				}
			} else {
				// 奸在敌方阵营时，继承周围棋子的能力
				// 左侧棋子能力...
				leftType = yIndex==0?'none':chessPosition[xIndex][yIndex-1].type
				rightType = yIndex==8?'none':chessPosition[xIndex][yIndex+1].type
				topType = (xIndex==0||xIndex==5)?'none':chessPosition[xIndex-1][yIndex].type
				bottomType = (xIndex==9||xIndex==4)?'none':chessPosition[xIndex+1][yIndex].type
				var typeList = [leftType,rightType,topType,bottomType]
				for(var k=0;k<typeList.length;k++) {
					var type = typeList[k]
					if(type != 'spy' && type != 'none' && role[type]) {
						let selectPositionArray1 = role[typeList[k]].getSelectPosition(chessPosition, chess, xIndex, yIndex)
						for(var i=0;i<selectPositionArray1.length;i++){
							for(var j=0;j<selectPositionArray1[i].length;j++){
								if(selectPositionArray1[i][j]==1)
									selectPositionArray[i][j] = 1
							}
						}
					}
				}
				// 继承棋子能力之后,需要排除掉奸本身范围之外的位置
				if(chess.camp == 'red') {
					for (var i=5;i<10;i++){
						for(var j=0;j<9;j++){
							selectPositionArray[i][j] = 0
						}
					}
				} else {
					for (var i=0;i<5;i++){
						for(var j=0;j<9;j++){
							selectPositionArray[i][j] = 0
						}
					}
				}
			}
			return selectPositionArray;
		},
	},
}

// type: start开局, none无棋子
function initBoard(chessPosition, selectChessPosition, type) {
	for (var i = 0; i < 10; i++) {
	  chessPosition.push([])
	  selectChessPosition.push([])
	  for (var j = 0; j < 9; j++) {
	    chessPosition[i].push(Object.assign({}, chess.noneChess))
	    selectChessPosition[i].push(0)
	  }
	}
	if(type == 'start') {
		// 开局
		chessPosition[0] = [Object.assign({}, chess.carChess, {
		  camp: 'black'
		}), Object.assign({}, chess.horseChess, {
		  camp: 'black'
		}), Object.assign({}, chess.elephantChess, {
		  camp: 'black'
		}), Object.assign({}, chess.scholarChess, {
		  camp: 'black'
		}), Object.assign({}, chess.generalChess, {
		  camp: 'black'
		}), Object.assign({}, chess.scholarChess, {
		  camp: 'black'
		}), Object.assign({}, chess.elephantChess, {
		  camp: 'black'
		}), Object.assign({}, chess.horseChess, {
		  camp: 'black'
		}), Object.assign({}, chess.carChess, {
		  camp: 'black'
		})]
		chessPosition[1][4] = Object.assign({}, chess.spyChess, {
		  camp: 'black'
		})
		chessPosition[2][1] = Object.assign({}, chess.gunChess, {
		  camp: 'black'
		})
		chessPosition[2][7] = Object.assign({}, chess.gunChess, {
		  camp: 'black'
		})
		chessPosition[3][0] = Object.assign({}, chess.soldierChess, {
		  camp: 'black'
		})
		chessPosition[3][2] = Object.assign({}, chess.soldierChess, {
		  camp: 'black'
		})
		chessPosition[3][4] = Object.assign({}, chess.soldierChess, {
		  camp: 'black'
		})
		chessPosition[3][6] = Object.assign({}, chess.soldierChess, {
		  camp: 'black'
		})
		chessPosition[3][8] = Object.assign({}, chess.soldierChess, {
		  camp: 'black'
		})
		chessPosition[6][0] = Object.assign({}, chess.soldierChess, {
		  camp: 'red'
		})
		chessPosition[6][2] = Object.assign({}, chess.soldierChess, {
		  camp: 'red'
		})
		chessPosition[6][4] = Object.assign({}, chess.soldierChess, {
		  camp: 'red'
		})
		chessPosition[6][6] = Object.assign({}, chess.soldierChess, {
		  camp: 'red'
		})
		chessPosition[6][8] = Object.assign({}, chess.soldierChess, {
		  camp: 'red'
		})
		chessPosition[7][1] = Object.assign({}, chess.gunChess, {
		  camp: 'red'
		})
		chessPosition[7][7] = Object.assign({}, chess.gunChess, {
		  camp: 'red'
		})
		chessPosition[8][4] = Object.assign({}, chess.spyChess, {
		  camp: 'red'
		})
		chessPosition[9] = [Object.assign({}, chess.carChess, {
		  camp: 'red'
		}), Object.assign({}, chess.horseChess, {
		  camp: 'red'
		}), Object.assign({}, chess.elephantChess, {
		  camp: 'red'
		}), Object.assign({}, chess.scholarChess, {
		  camp: 'red'
		}), Object.assign({}, chess.generalChess, {
		  camp: 'red'
		}), Object.assign({}, chess.scholarChess, {
		  camp: 'red'
		}), Object.assign({}, chess.elephantChess, {
		  camp: 'red'
		}), Object.assign({}, chess.horseChess, {
		  camp: 'red'
		}), Object.assign({}, chess.carChess, {
		  camp: 'red'
		})]
	}
}

// 是否是空棋子
function isNone(chessPosition, xIndex, yIndex) {
	if(xIndex < 0 || xIndex > 9)
		return true
	if(yIndex < 0 || yIndex > 8)
		return true
	return !chessPosition[xIndex][yIndex] || chessPosition[xIndex][yIndex].type=='none'
}

// chess1吃子方, chess2被吃方
// 判断chess1是否可以吃chess2
function isEat(chess1, chess2) {
	if(!chess2 || chess2.type=='none')
		return true
	if(chess1.type == 'spy')
		// 奸棋不能吃子
		return false
	if(chess1.camp == chess2.camp)
		// 奸棋双方都能吃
		return chess2.type == 'spy' ? true : false
	else
		return true
}