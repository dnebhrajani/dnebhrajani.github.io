---
title: "Blog"
subtitle: ""
author: ""
author-url: ''
date: "2022-09-17"
---

Among my interests, art, programming and writing are prominent.

I started writing code recently, and have developed a strong love for
discrete mathematics and algorithm design. Under the Programminging section
of this page is some interesting code I've written - inputs or suggestions
are always welcome. 


# Programming

```{.c .numberLines}
#include <stdio.h>

int main(void) {
    char *pc;
    long x;
    x = 0x554f5945564f4c49;
    pc = &x;
    for(char *i = pc; i < pc+8; ++i) {
        printf("%c", *i);
        if(i == pc || i == pc+4 || i == pc+7) {
            printf(" ");
        }	      
    }
    printf(":)\n");
}	
```


[← Return home](index)

