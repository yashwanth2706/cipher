function encoder()
    {
        let alpha, i, j, msag, y, temp, indcrpt, key=enval.key.value, crpt,jump, ind, orgkey, midkey, space;
        let rmsg=ralpha, newalpha='', ralpha='', store='';
        const sp=''+' '+'';
        
        msag=enval.txt.value;
        alpha='kxodnjsrzgvatcyhwbfmeqlpui';
        
        for(i=0;i<=alpha.length-1;i++)
        {
            if(!(key>0))
            {
                temp=alpha.length-(y+1);
                ralpha=ralpha+alpha[temp];
                newalpha=newalpha+ralpha[i];
            }
            newalpha=newalpha+alpha[i];
        }
     
     for(jump=0;jump<=msag.length-1;jump++)
     {
            space=newmsg[jump];
            ind=newalpha.indexOf(space);
         
            if(space==' ')
            {
                ind=99;
            }
            else
            if(!(newalpha.includes(newmsg[jump])))
            {
                ind=-99;
            }
         
            if(key<0)
            {
                orgkey=key;
                orgkey=orgkey*(-1);
                midkey=orgkey;
            }
            else
            {
                midkey=key;
            }
            indcrpt=ind+(midkey%26);
         
            if((indcrpt<-26)&&(indcrpt<0))
            {
                crpt=msag[jump];
            }  
            else
            if((indcrpt>-26)&&(indcrpt<0))
            {
                indcrpt=indcrpt*(-1);
                crpt=newalpha[indcrpt];
            }
            else
            if((indcrpt<26)&&(indcrpt>=0))
            {
                crpt=newalpha[indcrpt];
            }
            else
            if((indcrpt>=26)&&(indcrpt<=52))
            {
                crpt=newalpha[indcrpt-26];
            }
            else
            {
                crpt=sp;
            }
                store=store+crpt;
        }
        
     enval.txt.value=store;
     enval.key.value='';
        
}

function copi()
{
    caution.style.color='#03fc0f';
    document.getElementById('caution').innerHTML='Copied';
    deval.cop.value=enval.txt.value;
}

function clr()
{
    caution.style.color='#03fc0f';
    document.getElementById('caution').innerHTML='Cleard';
    enval.txt.value='';
    enval.key.value='';
}
