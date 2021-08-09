function greet(name) {
    return 'Hello, ' + name;
  }

  function isFromBellville(itemName) {
    return itemName.startsWith('CY')
  }

 function regCheck(regNo,regLocation){
  return regNo.endsWith(regLocation)
}

function countRegNumber(regCount) {
  return regCount.split(',').length;
}

  function isWeekday(weekDay) {
    return weekDay.startsWith('M');
  }

  function yearsAgo(theYear){
    const year = new Date()
    return year.getFullYear() - theYear;
  }

  function countAllPaarl(regNum){
    var list = regNum.split(',');
    let counter =0;
    for(var i=0; i<list.length; i++){
      var newList = list[i].trim();
      
      if(newList.includes('CJ')){
        counter++;
      }
    }
    console.log(newList);
    return counter;
  }

  function countAllFromTown(regNum,town){
    var list = regNum.split(',');
    let counter =0;
    for(var i=0; i<list.length; i++){
      var newList = list[i].trim();
      
      if(newList.includes(town)){
        counter++;
      }
    }
    console.log(newList);
    return counter;
  }

  function transportFee (price){
    switch(price) {
        case "morning":
            return "R20";
        case "afternoon":
            return "R10";
        case "nightshift":
            return "free";
        default:
            
    }
}
    function  totalPhoneBill(string){
        const stringItems = string.split(',');
        let totalCost=0;
        for(var i= 0; i<stringItems.length; i++){
          const items = stringItems[i].trim(); 
          if(items == 'call'){
            totalCost += 2.75; 
          }
          else if(items == 'sms'){
            totalCost += 0.65;
          }
        }
        return  'R' + totalCost.toFixed(2);
      }
    

      function fromWhere(regNum){
        switch(regNum) {
            case "CY":
                return "Bellville";
            case "CJ":
                return "Paarl";
            case "CA":
                return "Cape Town";
            case "CC":
                return "Some other place!";
            default:
                
        }
    }

    function findItemsOver20(itemList){
  
        const list =[];
        for(var i= 0; i<itemList.length; i++){
          if(itemList[i].qty>20)
            list.push(itemList[i])
        }
        console.log(list);
        return list;
      }
    
      function findItemsOver(itemList, listItem){
        const list1 = [];
        for(var i in itemList){
          if(itemList[i].qty>listItem)
            list1.push(itemList[i])
        }
        console.log(list1);
        return list1
      }

      
      function mostProfitableDepartment(data){

        var departmentSale=0;
        var departmentName=" ";
        var departmentMap={};
      
        for (var i=0;i<data.length;i++){
          var item=data[i];
          departmentMap[item.department]=0;
        }
      
        for (var i in data){
          var item=data[i];
          var totalDepartmentSale=departmentMap[item.department];
          totalDepartmentSale+=item.sales;
          departmentMap[item.department]=totalDepartmentSale
        }
      
        for(var i in departmentMap){
          var item=departmentMap[i];
       
          if(item>=departmentSale){
            departmentSale=item;
            departmentName=i;
          }
        }
      return departmentName
      }

      
    
