$(function(){
    
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    doit();

})

var c = 0;

function createboard(red){
    $("body").append(`<table id="asd${c}" style="margin: 3%; border-color: black; border-style: solid; border-width: 5px;"></table> <br><hr style="border-width: 5px; border-color: black"><br>`);
    for(let i = 0; i < 8; i++){
    $(`#asd${c}`).append(`<tr class="${String(c) + String(i + 1)}"></tr>`);
    for (let k = 0; k < 8; k++)
    {
    $(`.${String(c) + String(i + 1)}`).append(`<td style="width: 80px; height: 80px;" id="${String(c) + String(i + 1) + String(k + 1)}" class="${((i % 2 == 0 && k % 2 == 0) || (i % 2 == 1 && k % 2 == 1))? `black${c}` : `white${c}`}"></td>`);
    }}
    $(`.black${c}`).css("background-color", "black");
    $(`.white${c}`).css("background-color", "white");
    for (let j = 0; j < 8; j++)
    {
        $(`#${String(c) + String(red[j])}`).css("background-color", "red");
    }
    c++;
}

function doit(){
    /*
    let queens = ["00","00","00","00","00","00","00","00"];
    while (Number(queens[0][0]) != 5)
    {
        queens[7][1] = Number(queens[7][1]) + 1;
        queens.reverse();
        queens.forEach(item => {
            if  (item[1] == "8")
            {
                queens[]
            }
        })
        queens.reverse();
    }
    */
    let counter = 0;
    for (let i1 = 1; i1 < 9; i1++)
    {
        /* for (let j1 = 1; j1 < 2; j1++)
        { */
            for (let i2 = 1; i2 < 9; i2++)
            {
                if (i2 == i1 || i2 + 2 == i1 + 1 || i2 - 2 == i1 - 1)
                {
                    continue;
                }
                /* for (let j2 = 2; j2 < 9; j2++)
                {
                    if (j2 == j1)
                    {
                        continue;
                    } */
                    for (let i3 = 1; i3 < 9; i3++)
                    {
                        if (i3 == i1 || i3 == i2 || i3 + 3 == i2 + 2 || i3 + 3 == i1 + 1|| i3 - 3 == i2 - 2 || i3 - 3 == i1 - 1)
                        {
                            continue;
                        }
                        /* for (let j3 = 3; j3 < 4; j3++)
                        {
                            if (j3 == j1 || j3 == j2)
                            {
                                continue;
                            } */
                            for (let i4 = 1; i4 < 9; i4++)
                            {
                                if (i4 == i1 || i4 == i2 || i4 == i3 || i4 + 4 == i3 + 3 || i4 + 4 == i2 + 2 || i4 + 4 == i1 + 1|| i4 - 4 == i3 - 3 || i4 - 4 == i2 - 2 || i4 - 4 == i1 - 1)
                                {
                                    continue;
                                }
                                /* for (let j4 = 4; j4 < 5; j4++)
                                {
                                    if (j4 == j1 || j4 == j2 || j4 == j3)
                                    {
                                        continue;
                                    } */
                                    for (let i5 = 1; i5 < 9; i5++)
                                    {
                                        if (i5 == i1 || i5 == i2 || i5 == i3 || i5 == i4 || i5 + 5 == i4 + 4 || i5 + 5 == i3 + 3 || i5 + 5 == i2 + 2 || i5 + 5 == i1 + 1|| i5 - 5 == i4 - 4 || i5 - 5 == i3 - 3 || i5 - 5 == i2 - 2 || i5 - 5 == i1 - 1)
                                        {
                                            continue;
                                        }
                                        /* for (let j5 = 5; j5 < 6; j5++)
                                        {
                                            if (j5 == j1 || j5 == j2 || j5 == j3 || j5 == j4)
                                            {
                                                continue;
                                            } */
                                            for (let i6 = 1; i6 < 9; i6++)
                                            {
                                                if(i6 == i1 || i6 == i2 || i6 == i3 || i6 == i4 || i6 == i5 || i6 + 6 == i5 + 5 || i6 + 6 == i4 + 4 || i6 + 6 == i3 + 3 || i6 + 6 == i2 + 2 || i6 + 6 == i1 + 1|| i6 - 6 == i5 - 5 || i6 - 6 == i4 - 4 || i6 - 6 == i3 - 3 || i6 - 6 == i2 - 2 || i6 - 6 == i1 - 1)
                                                {
                                                    continue;
                                                }
                                               /*  for (let j6 = 6; j6 < 7; j6++)
                                                {
                                                    if (j6 == j1 || j6 == j2 || j6 == j3 || j6 == j4 || j6 == j5)
                                                    {
                                                        continue;
                                                    } */
                                                    for (let i7 = 1; i7 < 9; i7++)
                                                    {
                                                        if (i7 == i1 || i7 == i2 || i7 == i3 || i7 == i4 || i7 == i5 || i7 == i6 || i7 + 7 == i6 + 6 || i7 + 7 == i5 + 5 || i7 + 7 == i4 + 4 || i7 + 7 == i3 + 3 || i7 + 7 == i2 + 2 || i7 + 7 == i1 + 1|| i7 - 7 == i6 - 6 || i7 - 7 == i5 - 5 || i7 - 7 == i4 - 4 || i7 - 7 == i3 - 3 || i7 - 7 == i2 - 2 || i7 - 7 == i1 - 1)
                                                        {
                                                            continue;
                                                        }
                                                        /* for (let j7 = 7; j7 < 8; j7++)
                                                        {
                                                            if (j7 == j1 || j7 == j2 || j7 == j3 || j7 == j4 || j7 == j5 || j7 == j6)
                                                            {
                                                                continue;
                                                            } */
                                                            for (let i8 = 1; i8 < 9; i8++)
                                                            {
                                                                if (i8 == i1 || i8 == i2 || i8 == i3 || i8 == i4 || i8 == i5 || i8 == i6 || i8 == i7 || i8 + 8 == i7 + 7 || i8 + 8 == i6 + 6 || i8 + 8 == i5 + 5 || i8 + 8 == i4 + 4 || i8 + 8 == i3 + 3 || i8 + 8 == i2 + 2 || i8 + 8 == i1 + 1|| i8 - 8 == i7 - 7 || i8 - 8 == i6 - 6 || i8 - 8 == i5 - 5 || i8 - 8 == i4 - 4 || i8 - 8 == i3 - 3 || i8 - 8 == i2 - 2 || i8 - 8 == i1 - 1)
                                                                {
                                                                    continue;
                                                                }
                                                                /*for (let j8 = 8; j8 < 9; j8++)
                                                                {
                                                                    if (j8 == j1 || j8 == j2 || j8 == j3 || j8 == j4 || j8 == j5 || j8 == j6 || j8 == j7)
                                                                    {
                                                                    continue;
                                                                    }*/
                                                                    let board = [`${i1}1`,`${i2}2`,`${i3}3`,`${i4}4`,`${i5}5`,`${i6}6`,`${i7}7`,`${i8}8`];
                                                                    createboard(board);
                                                                    counter++;
                                                                //}
                                                            }
                                                        //}
                                                    }
                                                //}
                                            }
                                        //}
                                    }
                                //}
                            }
                        //}
                    }
                //}
            }
        //}
    }
    console.log(`${counter} megoldás van`);
}

/* function iscorrect(param)
{
    let row = 1;
    let column = 1;
    let counter = 1;
    param.forEach(element => {
        row *= Number(element[0]) + 1;
        column *= Number(element[1]) + 1;
    });
    if (40320 == row && 40320 == column)
    {


        param.forEach(item => {

            let first = true;
            param.forEach(elem => {

                if (Number(item[0]) + Number(item[1]) == Number(elem[0]) + Number(elem[1]) || Number(item[0]) - Number(item[1]) == Number(elem[0]) - Number(elem[1]))
                {
                    if  (first)
                    {
                        first = false;
                    }
                    else 
                    {
                        return false;
                    }
                }

            })

        })
        return false;

    }
    else{
        return false;
    }
} */