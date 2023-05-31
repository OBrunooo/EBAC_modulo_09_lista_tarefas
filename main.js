$(document).ready(function(){
    tarefas =[]
    let i = 0


    $("form").submit(function(e){
        e.preventDefault()

        novalinha()
    })

    function novalinha(){
        tarefas.push($("#nova-tarefa").val())
        var novalinha = ''

        novalinha = `<li ><a class="tarefa" href="#lista"> ${tarefas[i]}</a></li>`;
        
        
        i= i+1
        $(".lista").append(novalinha);
        $("#nova-tarefa").val('');
    }


    $(document).on("click" , ".tarefa" , function(){
        if($(this).hasClass("feito")){
            $(this).removeClass("feito")
        }
        else {$(this).addClass("feito")
        }
    }
    )

    $("#limpar-lista").click(function(){
        if(confirm("deseja limpar sua lista de tarefas?")){
        $(".lista").html("")
    }
    })
})