(function () {
    'use strict';
    var user,columnNames=[];
    user = [{
            Name: "Amitesh",
            Phone: "9916971876",
            Credit:"100$",
            Credit_Used:"20$",
            Credit_Left:"80$"
        }
    ];
    

    function createElement(elementType) {
        return document.createElement(elementType);
    }

    function createHeaderRow() {
        var headerRow = createElement('tr');
        for (var i in user[0]) {
            var column = createElement('td');
            column.innerHTML = i;
            headerRow.appendChild(column);
            columnNames.push(i);
        }
        console.log(headerRow);
        return headerRow;
    }

    function createDataRow(x) {
            var dataRow = createElement('tr');
            for(var columns=0;columns<columnNames.length;columns++){
                var dataColumn = createElement('td');
                dataColumn.innerHTML = user[x][columnNames[columns]];
                dataRow.appendChild(dataColumn);
            }
            
        
        console.log(dataRow);
        return dataRow;
    }


    function createTable(){
        var tbl = document.getElementById('user_info');
        tbl.className = 'table table-bordered';
        tbl.appendChild(createHeaderRow());
        for(var x=0;x<user.length;x++){
          tbl.appendChild(createDataRow(x));
        };
        var buttons = document.getElementsByClassName('btn');
        for(var r=0; r<buttons.length;r++){
            buttons[r].addEventListener('click',function(){
               // console.log(x['rowNumber']);
                console.log(this['rowNumber']);
                this.parentNode.parentNode.remove();
            })
        }
    }
    createTable();
})();