 function decoder()
    {
  let alpha,i,j,msag;
  msag=enval.txt.value;
      alpha='kxodnjsrzgvatcyhwbfmeqlpui';
   let newmsg='',indcrpt;
   for(j=0;j<=msag.length-1;j++)
   {
     newmsg=newmsg+msag[j];
   }
     let key=enval.key.value;
     let newalpha='',ralpha='';
   for(i=0;i<=alpha.length-1;i++)
     {
       if(key>0)
       {
        newalpha=newalpha+alpha[i];
       }
       else
       if(key<0)
       {
        for(y=0;y<alpha.length;y++)
        {
        temp=alpha.length-(y+1);
        ralpha=ralpha+alpha[temp];
        }
         newalpha=newalpha+ralpha;
       }
       else{
         cerr();
       }
     }
     let crpt,jump,store='';
     let space,ind,midkey,orgkey;
     const sp=''+' '+'';
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
      indcrpt=ind-(midkey%26);
     if((indcrpt<0)&&(indcrpt<-26))
     {
        crpt=msag[jump];
     }
     else
     if((indcrpt>=26)&&(indcrpt<=52))
     {
       indcrpt=newalpha[indcrpt-26];
     }
     else
     if((indcrpt>=0)&&(indcrpt<26))
     {
       crpt=newalpha[indcrpt];
     }
     else
      if((indcrpt>-26)&&(indcrpt<0))
     {
       crpt=newalpha[26+indcrpt];
     }
     else
     if(indcrpt>52)
     {
       crpt=sp;
     }
     else
     {
       crpt=newalpha[indcrpt];
     }
       store=store+crpt;
     }
     enval.txt.value=store;
}