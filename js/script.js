var row,table=document.getElementById("table");

function checkTextLines()
{
    var nome=document.getElementById("nome").value;
    var condicao=document.getElementById("descricao").value;
    var tempFin=document.getElementById("temp_Fin").value;

    if(nome=="" || condicao=="" || tempFin=="")
      { 
        alert("Alguma aba está vazia");   
        return false;
      }
    else
        return true;    
}

function addRow() {
   

    var nome=document.getElementById("nome").value;
    var condicao=document.getElementById("descricao").value;
    var tempFin=document.getElementById("temp_Fin").value;

    if(checkTextLines())
    {
        var newRow=table.insertRow(table.lengh);
    
        var cell1 =newRow.insertCell(0);
        var cell2 =newRow.insertCell(1);
        var cell3 =newRow.insertCell(2);
        var cell4 =newRow.insertCell(3);

        cell1.innerHTML = nome;
        cell2.innerHTML = condicao;
        cell3.innerHTML = tempFin;
        cell4.innerHTML = "Em Aberto";
        
        setTextLines("","","");
    }
    RowSelected();
}

function setTextLines(nome,descricao,temp_Fin)
{
    document.getElementById("nome").value =nome;
    document.getElementById("descricao").value=descricao;
    document.getElementById("temp_Fin").value=temp_Fin
}



function RowSelected()
{
    for(var i =0; i<table.rows.length;i++)
    {
        console.log("dsa");

        table.rows[i].onclick = function()
        {
            row=this.rowIndex;
            setTextLines(this.cells[0].innerHTML, this.cells[1].innerHTML, this.cells[2].innerHTML);
        };

    }
}

function changeRow()
{
    var nome=document.getElementById("nome").value;
    var condicao=document.getElementById("descricao").value;
    var tempFin=document.getElementById("temp_Fin").value;

    if(checkTextLines())
    {
        table.rows[row].cells[0].innerHTML=nome;
        table.rows[row].cells[1].innerHTML=condicao;
        table.rows[row].cells[2].innerHTML=tempFin;

        setTextLines("","","");
    }
}

function changeStatus()
{
    if(checkTextLines())
    {
        table.rows[row].cells[3].innerHTML="Completado";
        setTextLines("","","");
    }
}

function removeRow()
{
    if(checkTextLines())
    {
        table.deleteRow(row);
        setTextLines("","","");
    }
}

RowSelected();