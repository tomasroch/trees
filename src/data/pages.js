const pages = [
    {
        "name": "Základní pojmy",
        "path": "/zakladni-pojmy",
        "textData": null,
        "tabs": null,
        "subpages": [
            {
                "name": "Strom",
                "path": "strom",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Strom se řadí mezi jedny ze základních struktur v přírodě i v oblasti matematiky. Stromy v přírodě vynikají svou rozmanitou a výrazně složitou strukturou. Naopak stromy v rámci teorie grafů představují prakticky nejjednodušší varianty grafů, ačkoliv analýza jejich vlastností poskytuje zajímavý výzkumný prostor. V kontextu teorie grafů je strom definován jako konečný graf, to znamená, že počet jeho vrcholů je konečný.<br><b>Strom je souvislý graf, neobsahující kružnici (acyklický souvislý graf)</b>. <br> Strom obsahující pouze jeden vrchol, nazýváme triviálním stromem. Strom, který obsahuje alespoň dva vrcholy, nazveme netriviálním stromem.",
                                "images": [
                                    {
                                        "imagePath": "/images/strom.jpeg",
                                        "imageDescription": "Příklad čtyř různých stromů",
                                        "aspectRatio": "4"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "Definice listu / vnitřního vrcholu:",
                                "text": "Nechť T=(V, E) je netriviální strom. Vrchol v&isin;V stupně 1 nazýváme listem stromu T. Vrchol u&isin;V stupně většího než jedna nazýváme vnitřním vrcholem stromu T.",
                                "images": null,
                            },
                            {
                                "smallTitle": "Věta (o listu):",
                                "text": "Každý netriviální strom obsahuje list.",
                                "images": null,
                            },
                            {
                                "smallTitle": "Věta (o listech):",
                                "text": "Každý netriviální strom T má alespoň dva vrcholy stupně 1 (listy).",
                                "images": null,
                            },
                            {
                                "smallTitle": "Tvrzení (o odebrání listu ze stromu):",
                                "text": "Nechť T=(V, E) je strom, deg v=1&and;v&isin;V(T). Pak T - v je opět strom. <br><br>Zřejmě graf T' = T - v neobsahuje kružnici. Zbývá dokázat, že graf T' je souvislý graf. Nechť x, y jsou dva libovolné vrcholy stromu T různé od vrcholu v a nechť Px,y je cesta z vrcholu x do vrcholu y ve stromu T. Cesta Px,y neobsahuje vrchol v, neboť cesta může obsahovat nejvýše dva vrcholy stupně jedna (koncové vrcholy cesty) a těmi by mohly být pouze vrcholy x a y. Cesta Px,y je tak celá obsažena i v grafu T' a graf T' je tudíž souvislý.",
                                "images": null,
                            },
                            {
                                "smallTitle": "Tvrzení (o přidaní hrany s vrcholem):",
                                "text": "Přidáme-li k libovolnému vrcholu v stromu T = (V, E) hranu s vrcholem {v, w}, w V∉(T), dostaneme opět strom <br><br> Důkaz (E.Milková:Problém minimální kostry): Přidáním jednoho vrcholu a jedné hrany ke grafu nemůžeme zřejmě kružnici vytvořit. Zbývá dokázat, že graf T'=(V&cup;{w}, E&cup;{v, w}) získaný ze stromu T přidáním hrany {v, w}, v&isin;V, w&notin;V, bude souvislý. To však zřejmě plyne ze skutečnosti, že pro každé dva vrcholy x a y grafu T' různé od vrcholu w existuje cesta z x do y v grafu T' totožná s cestou z x do y ve stromu T. A cestu v grafu T' z libovolného vrcholu x do vrcholu w dostaneme prodloužením cesty z vrcholu x do vrcholu v ve stromu T o hranu {v, w}. A naopak cestu z vrcholu w do libovolného vrcholu x v grafu T' získáme připojením cesty z vrcholu v do vrcholu x ve stromu T k hraně {w, v}.",
                                "images": null,
                            },
                            {
                                "smallTitle": "Ekvivalentní podmínky: ",
                                "text": "Ekvivalentní podmínky Nechť T je graf s n vrcholy a m hranami. Následující tvrzení jsou ekvivalentní:<br> (1) T je strom, <br> (2) mezi libovolnými dvěma vrcholy grafu T existuje právě jedna cesta ( matem. zápis &forall;x, y&isin;V &exist;! Px,y ), <br> (3) T je souvislý graf a m = n – 1 <br> (4) T je souvislý a každá jeho hrana je most <br> (5) T neobsahuje kružnici a m = n – 1 <br> (6) T neobsahuje kružnici a když libovolné 2 nesousední vrcholy v T spojíme hranou, získaný graf T má pravě jednu kružnici. ",
                                "images": null,
                            },
                        ]
                    },
                    {
                        "name": "Otázky",
                        "textData": [
                            {
                                "smallTitle": "Otázka 1",
                                "images": null,
                                "question": {
                                    "name": "Nechť graf G je souvislý graf, který má 12 vrcholů stupně 1, tři vrcholy stupně 2 a čtyři vrcholy stupně 5. Určete pomocí vztahu vrcholů a hran v stromě, zda G je či není strom?",
                                    "answer": "Ne",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 2",
                                "images": null,
                                "question": {
                                    "name": "Nechť graf G je obyčejný souvislý graf, který má 10 vrcholů stupně jedna, čtyři vrcholy stupně dva a čtyři vrcholy stupně čtyři. Určete pomocí vztahu vrcholů a hran v stromě, zda G je či není strom?",
                                    "answer": "Ano",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 3",
                                "images": null,
                                "question": {
                                    "name": "Rozhodněte pomocí vztahu vrcholů a hran v stromě, zda graf se skórem (1,1,1,1,1,1,1,1,1,1,2,2,3,5) může být stromem?",
                                    "answer": "Ne",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 4",
                                "images": null,
                                "question": {
                                    "name": "Rozhodněte pomocí vztahu vrcholů a hran v stromě, zda graf se skórem (1,1,1,1,1,2,2,3,3,3) může být stromem?",
                                    "answer": "Ano",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 5",
                                "images": null,
                                "question": {
                                    "name": "Rozhodněte pomocí vztahu vrcholů a hran v stromě, zda graf se skórem (1,1,1,1,1,1,2,2,3,5) může být stromem?",
                                    "answer": "Ano",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 6",
                                "images": null,
                                "question": {
                                    "name": "Rozhodněte pomocí vztahu vrcholů a hran v stromě, zda graf se skórem (1,1,1,1,1,1,1,1,2,3,4,5) může být stromem?",
                                    "answer": "Ano",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 7",
                                "images": null,
                                "question": {
                                    "name": "Rozhodněte pomocí vztahu vrcholů a hran v stromě, zda graf se skórem (1,1,1,1,1,1,2,2,2,2,3,4,5) může být stromem?",
                                    "answer": "Ne",
                                    "placeHolder": "Ano/Ne..."
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Les",
                "path": "les",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Graf bez cyklů (acyklický graf) se nazývá les. Lze tedy les definovat jako nespojitý graf, jehož každá spojitá složka je strom. Les tedy může být i jeden souvislý strom bez cyklů nebo soubor izolovaných stromů.",
                                "images": [
                                    {
                                        "imagePath": "/images/les.jpeg",
                                        "imageDescription": "Dva stromy na obrázku představují příklad lesa",
                                        "aspectRatio": "2"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "Tvrzení (vztah mezi vrcholy a hranami v lese):",
                                "text": "Nechť G = (V, E) je les, který obsahuje k komponent, k ≥ 1. Potom platí vztah: |V| = |E| + k.<br><br> Důkaz (E.Milková:Problém minimální kostry): Označme Ti = (Vi, Ei), i = 1, 2, ..., k, komponenty lesa G. Protože každá komponenta je strom, platí |Vi| = |Ei| + 1, i = 1, 2, ..., k. Odtud rovnice viz obrázek.",
                                "images": [
                                    {
                                        "imagePath": "/images/les_rovnice.png",
                                        "imageDescription": "Rovnice",
                                        "aspectRatio": "8"
                                    }
                                ],
                            },
                        ]
                    },
                    {
                        "name": "Otázky",
                        "textData": [
                            {
                                "smallTitle": "Otázka 1",
                                "images": null,
                                "question": {
                                    "name": "Kolik hran má les obsahující 7 vrcholů a 3 komponenty?",
                                    "answer": "4",
                                    "placeHolder": "Odpověď zadej pouze číselně, ne slovy..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 2",
                                "images": null,
                                "question": {
                                    "name": "Kolik komponent obsahuje les s 13 vrcholy a 11 hranami? ",
                                    "answer": "2",
                                    "placeHolder": "Odpověď zadej pouze číselně, ne slovy..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 3",
                                "images": null,
                                "question": {
                                    "name": "Kolik vrcholů má les obsahující 10 hran a 4 komponenty?",
                                    "answer": "14",
                                    "placeHolder": "Odpověď zadej pouze číselně, ne slovy..."
                                }
                            },
                            {
                                "smallTitle": "Otázka 4",
                                "images": null,
                                "question": {
                                    "name": "Kolik hran a kolik komponent má les, jehož skóre je (1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4)?",
                                    "answer": "10,2",
                                    "placeHolder": "Zadej číselně ve tvaru {hrany},{komponenty}"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Centrum / Bicentrum",
                "path": "centrum-bicentrum",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Jedná se o vrchol (centrum) nebo dvojici sousedících vrcholů (bicentrum) tvořící střed stromu. Tento střed je tedy vrchol (nebo vrcholy) ze kterého je nejkratší maximální vzdálenost ke všem ostatním vrcholům ve stromě. Bicentrum, kdy dva vrcholy tvoří střed stromu obvykle nastane, když nejdelší cesta ve stromu má sudý počet vrcholů a střed tedy leží na hraně mezi dvěma vrcholy. Bicentrum lze předělat na centrum přidáním dalšího vrcholu mezi vrcholy tvořící bicentrum.",
                                "images": [
                                    {
                                        "imagePath": "/images/centrum.jpeg",
                                        "imageDescription": "Nalevo je zobrazen vrchol tvořící centrum. Druhý obrázek znázorňuje hranu mezi dvěmi vrcholy tvořící bicentrum",
                                        "aspectRatio": "4"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centrum/bicentrum stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "center11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Centroid / Bicentroid",
                "path": "centroid-bicentroid",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Centroid je vrchol, který rozděluje strom rovnovážně z hlediska počtu vrcholů. Je to vrchol, který když bude odstraněn rozdělí strom na dva a více stromů, kdy žádný z těchto stromů nemá více než polovinu vrcholů původního stromu. Centroid nemusí být zároveň centrem stromu. Analogicky bicentroid je definován jako dva sousedící vrcholy rozdělující strom na samostatné vyvážené stromy.",
                                "images": [
                                    {
                                        "imagePath": "/images/centroid.jpeg",
                                        "imageDescription": "Na obrázku je zobrazen vrchol, který je centroidem.",
                                        "aspectRatio": "2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Klikni správně na vrchol/vrcholy, který tvoří centroid/bicentroid stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "centroid11"
                                }
                            },
                        ]
                    }
                ],
            }
        ]
    },
    {
        "name": "Kořenové stromy",
        "path": "/korenove-stromy",
        "textData": null,
        "tabs": null,
        "subpages": [
            {
                "name": "Základní definice",
                "path": "zakladni-definice",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Patří k užitečným a často používaným grafům. Je často využíván pro znázornění libovolné hierarchické struktury napříč různými obory.<br>Kořenový strom je definován tím, že vždy obsahuje jeden význačný vrchol, který se nazývá Kořen. Kořen je vrchol do kterého nevede žádná hrana. Do každého dalšího vrcholu v kořenovém stromě vede právě jedna hrana a každý tento vrchol je dostupný z kořenového vrcholu. Obvykle se kořenový strom kreslí do roviny, tak aby hrany vedly od shora dolů a byly znázorněny jednotlivé úrovně stromu a kořen je umístěn nahoře, ale není tento typ znázornění pravidlem.",
                        "images": [
                            {
                                "imagePath": "/images/korenove_stromy.jpeg",
                                "imageDescription": "Obvykle vedou hrany od shora dolů jako u stromu vlevo, ale není to pravidlem.",
                                "aspectRatio": "3"
                            }
                        ]
                    },
                    {
                        "smallTitle": "Definice – kořenový strom/kořen stromu:",
                        "text": "Dvojici (T, r), kde T = (V, E) je strom a r&isin;V pevně zvolený vrchol, nazýváme kořenový strom a vrchol r kořen stromu (T, r).",
                        "images": null,
                    }
                ]
            },
            {
                "name": "Předchůdce / Následník",
                "path": "predchudce-naslednik",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Také se používá označení z „rodinné“ terminologie otec a syn. V kořenovém stromě, pokud existuje hrana vedoucí z vrcholu x do vrcholu y, pak je vrchol x považován za předchůdce vrcholu y a vrchol y je považován za následníka vrcholu x. Lze je oba označit jako předchůdce i následníka přímého, protože se jedná o sousední vrcholy. Vrcholy, které mají společného předchůdce lze také označit jako bratry. Analogicky se pak lze setkat s označením dědeček pro předchůdce předchůdce a vnuka pro následníka následníka, že se nejedná o přímého předchůdce a následníka lze zdůraznit přívlastkem „nepřímý“ předchůdce a následník.<br>V kořenovém stromě má tedy každý vrchol svého předchůdce s výjimkou kořene, ten předchůdce nemá. Pokud vrchol nemá žádného následníka je označován jako list. Pokud alespoň jednoho následníka má, tak se jedná o vnitřní vrchol.",
                                "images": null
                            },
                            {
                                "smallTitle": "Definice - předchůdce/následník:",
                                "text": "Nechť (T, r) je kořenový strom. Jestliže vrchol x leží na cestě z kořene r do vrcholu y, pak říkáme, že x je předchůdce y a y je následník x. Jestliže navíc jsou x a y sousední vrcholy, nazýváme x přímým předchůdcem y a y přímým následníkem x.<br> Pokud chceme zdůraznit, že vrchol x je předchůdce vrcholu y, ale zároveň není jeho přímý předchůdce, řekneme, že x je nepřímý předchůdce y. Totéž platí pro pojem nepřímý následník.",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Urči kliknutím všechny následníky vrcholu C",
                                "images": null,
                                "exercise": {
                                    "name": "parent1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Urči kliknutím všechny předchůdce vrcholu D",
                                "images": null,
                                "exercise": {
                                    "name": "parent2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Urči kliknutím přímé následníky vrcholu B",
                                "images": null,
                                "exercise": {
                                    "name": "parent3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Urči kliknutím přímé předchůdce vrcholu K",
                                "images": null,
                                "exercise": {
                                    "name": "parent4"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Vrstva / Hloubka / Výška",
                "path": "vrstva-hloubka-vyska",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "Hloubka a výška",
                                "text": "V kořenovém stromě je hloubka vrcholu označována hodnotou počtu hran z daného vrcholu do kořene stromu. Výška vrcholu je potom rovna počtu hran z daného vrcholu do nejvzdálenějšího listu stromu. Je-li tedy kořen stromu nahoře, tak hloubka vrcholu je počet hran směrem nahoru ke kořenu a výška vrcholu je počet hran směrem dolů do nejvzdálenějšího listu.<br>Hloubka a výška celého kořenového stromu je potom rovna počtu hran z kořene do nejvzdálenějšího listu.",
                                "images": null
                            },
                            {
                                "smallTitle": "Vrstva",
                                "text": "Vrstva je množina všech vrcholů, které se nacházejí ve stejné hloubce, nikoliv výšce, protože ta se může vrcholy ve stejné hloubce lišit. Stane se tak v případě, když ve stejné vrstvě nejsou všechny listy.",
                                "images": [
                                    {
                                        "imagePath": "/images/VHV.jpeg",
                                        "imageDescription": "Na obrázku je znázorněna hloubka každého vrcholu. Vrcholy ve stejné hloubce tvoří vrstvu",
                                        "aspectRatio": "2"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "Definice – vrstva, hloubka stromu:",
                                "text": "Nechť (T, r) je kořenový strom, v jeho libovolný vrchol a k délka cesty z kořene r do vrcholu v. Pak říkáme, že vrchol v leží v k - té vrstvě stromu (T, r) nebo též ve vrstvě číslo k. Hloubka stromu (T, r) je rovna největšímu číslu z čísel vrstev, ve kterých leží listy stromu (T, r).",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Urči kolik vrstev má strom a v jaké vrstvě se nachází daný vrchol.",
                                "images": null,
                                "exercise": {
                                    "name": "depth1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Urči kolik vrstev má strom a v jaké vrstvě se nachází daný vrchol.",
                                "images": null,
                                "exercise": {
                                    "name": "depth2"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Podstrom",
                "path": "podstrom",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Podstrom stromu T je strom, který se skládá z určitého vrcholu V ve stromu T a všech jeho potomků. Podstrom je tedy tvořen podmnožinou vrcholů a hran původního stromu.",
                        "images": null,
                    },
                    {
                        "smallTitle": "Definice podstromu:",
                        "text": "Nechť (T, r) je kořenový strom. Pak podgraf (T', v) stromu (T, r) obsahující vrchol v a všechny následníky vrcholu v, nazýváme podstrom stromu (T, r) s kořenem v.",
                        "images": [
                            {
                                "imagePath": "/images/podstrom.png",
                                "imageDescription": "Příklad kořenového stromu a jeho podstromu",
                                "aspectRatio": "2"
                            }
                        ]
                    },
                ]
            },
            {
                "name": "Uspořádaný kořenový strom",
                "path": "usporadany-korenovy-strom",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Také nazýván pěstovaný strom. Potomci každého vrcholu jsou uspořádány do pevně dané sekvence v rovině a bez křížení jednotlivých hran. Následkem toho má strom při stejném souboru vrcholů různé struktury definované právě uspořádáním potomků.",
                        "images": null
                    },
                    {
                        "smallTitle": "",
                        "text": "<br>Uspořádaný kořenový strom si můžeme představit jako strom s vyznačeným kořenem a pevně zvoleným nakreslením v rovině bez křížení hran. Nakreslení hran následníků vzhledem k hraně předchůdce udává (ve zvolené orientaci) pořadí.",
                        "images": null
                    },
                    {
                        "smallTitle": "",
                        "text": "<br>Uspořádání potomků vrcholu ve stromu je přirozeně požadováno v mnoha praktických situacích. Například ve stromových datových strukturách jsou často potomci explicitně seřazeni podle daného klíče, jako třeba ve vyhledávacích binárních stromech. I v případech, kdy uspořádání potomků ve stromě není dáno, je možné jej jednoznačně definovat.",
                        "images": null
                    },
                    {
                        "smallTitle": "Definice uspořádaného (pěstovaného) stromu:",
                        "text": "Kořenový strom T, r je uspořádaný, pokud je pro každý jeho vrchol jednoznačně dáno pořadí jeho následníků (zleva doprava). Uspořádaný kořenový strom se také nazývá pěstovaný strom.",
                        "images": null
                    },
                ]
            }
        ]
    },
    {
        "name": "Isomorfismus",
        "path": "/isomorfismus",
        "tabs": null,
        "textData": null,
        "subpages": [
            {
                "name": "Základní definice",
                "path": "zakladni-definice",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Týká se rovnocennosti dvou obecných stromů. Isomorfismus stromů je koncept v teorii grafů, který se týká rovnocennosti dvou stromů. Stromy se považují za isomorfní, pokud existuje jeden k jednomu korespondence mezi jejich uzly tak, že struktura těchto stromů je zachována. To znamená, že pokud se dva stromy dají přetvořit tak, že se stane identickými pouhým přeuspořádáním uzlů (aniž by se měnila jejich vazba), pak jsou tyto stromy isomorfní. Jedná se o obecné typy stromů bez určeného kořene nebo specifického uspořádání potomků. Problém zjištění, zda jsou dva stromy isomorfní, má praktické aplikace v informatice, například v porovnávání syntaktických stromů v kompilátorech.",
                        "images": [
                            {
                                "imagePath": "/images/isom.jpeg",
                                "imageDescription": "Příklad dvou obecných isomorfních stromů",
                                "aspectRatio": "3"
                            }
                        ]
                    },
                    {
                        "smallTitle": "",
                        "text": "Ačkoliv pro obecné grafy není znám žádný rychlý algoritmus pro zjištění isomorfismu grafů, tak stromy jako grafy jsou v tomto výjimka. Algoritmy pro zjištění isomorfismu stromů jsou poměrně snadné a efektivní. Často s lineární časovou složitostí vzhledem k počtů uzlů ve stromech.",
                        "images": null
                    }
                ]
            },
            {
                "name": "Isomorfismus kořenové stromy",
                "path": "korenove-stromy",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Isomorfismus kořenových stromů přidává požadavek, že oba stromy musí mít specifikovaný kořen. Kořen jednoho stromu musí být zobrazen na kořen druhého stromu, tak aby byla zachována kořenová hierarchie  a struktura spojení vrcholů.",
                        "images": [
                            {
                                "imagePath": "/images/isom_koren.jpeg",
                                "imageDescription": "Příklad isomorfismu kořenových stromů, uspořádání potomků lze zaměnit",
                                "aspectRatio": "3"
                            }
                        ]
                    },
                    {
                        "smallTitle": "Definice izomorfismů kořenových stromů:",
                        "text": "Dva kořenové stromy (T,r) a (T´,r´) jsou izomorfní, pokud existuje izomorfismus mezi stromy T a T´ , který zobrazí kořen r na kořen r´.",
                        "images": null,
                    }
                ]
            },
            {
                "name": "Isomorfimus uspořádané kořenové stromy",
                "path": "usporadane-korenove-stromy",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Označován také jako isomorfismus pěstovaných stromů. Jedná se o nejstriktnější z výše popsaných isomorfismů stromů. Krom zachování kořene a struktury spojení vrcholů musí být také zachováno přesné uspořádání potomků každého vrcholu. Tedy při rovinném zobrazení musí být zohledněno i pořadí jednotlivých potomků",
                        "images": [
                            {
                                "imagePath": "/images/isom_usp_koren.jpeg",
                                "imageDescription": "Z pohledu uspořádaných kořenových stromů nejsou stromy na obrázku totožné, protože uspořádání potomků musí být identické",
                                "aspectRatio": "3"
                            }
                        ]
                    },
                    {
                        "smallTitle": "Definice izomorfismu uspořádaných kořenových stromů:",
                        "text": "Dva uspořádané kořenové (pěstované) stromy jsou izomorfní, jestliže pro ně existuje izomorfismus kořenových stromů, který navíc zachová pořadí potomků všech vrcholů.",
                        "images": null,
                    },
                ]
            },
            {
                "name": "Kódování stromů",
                "path": "kodovani-stromu",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Každý uspořádaný kořenový strom lze jednoznačně identifikovat jednoduchým řetězcem, který se skládá ze svou symbolů a to jsou nuly a jedničky. Takový řetězec na první pohled vypadá jako binární kód, a proto je také občas nazýván „binární kód stromu“. Nuly a jedničky lze nahradit libovolnými dvěma symboly a na principu kódování to nic nezmění.<br>Kódování stromu probíhá rekurzivně od listů až ke kořeni. Každý vrchol je uzavřený pár nuly a jedničky. Nejprve se tedy označí všechny listy jako „01“ a poté se postupuje po předchůdcích. Každý vrchol začne nulou a poté se přidají kódy všech následníků zleva doprava a nakonec se uzavře kódování vrcholu jedničkou. Takto se postupuje až ke kořeni, kde vznikne výsledný kód stromu. Rovnost výsledného řetězce s řetězcem jiného stromu potvrzuje, že stromy jsou isomorfní jako uspořádané kořenové stromy.",
                                "images": [
                                    {
                                        "imagePath": "/images/kod_stromu.jpeg",
                                        "imageDescription": "Zakódovaný strom",
                                        "aspectRatio": "2"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "",
                                "text": "Pokud již existuje řetězec daného stromu, lze z něj opět sestavit strom (dekódovat) následujícím postupem.<ul><li>S prvním znakem nuly se vytvoří kořen a to bude aktuální vrchol.</li><li>Každá další nula znamená novou hranu z aktuálního vrcholu a vytvoření vrcholu následníka. Tento vrchol následníka se stává aktuálním vrcholem.</li><li>Každý znak jedničky znamená, že se předchůdce aktuálního vrcholu stane aktuálním vrcholem.</li></ul> Alternativním postupem je použít šipkovou metodu.",
                                "images": null
                            },
                            {
                                "smallTitle": "Definice kódu uspořádaného stromu:",
                                "text": "Kód uspořádaného kořenového stromu se sestaví rekurzivně z kódů všech podstromů kořene, seřazených ve stejném pořadí jako jsou seřazeny kořeny podstromů (jeho následníci), a uzavřených do páru 0 a 1.",
                                "images": null,
                            },
                            {
                                "smallTitle": "Věta o izomorfismu pěstovaných stromů:",
                                "text": "Dva uspořádané kořenové (pěstované) stromy jsou isomorfní právě tehdy, když jejich kódy jsou shodné řetězce.",
                                "images": null,
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Do jednotlivých vrcholů zapiš správný kód daného vrcholu a do kořene kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "code11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Minimální kód stromu",
                "path": "minimalni-kod-stromu",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Kódování stromu lze využít pro potvrzení isomorfismu stromů pouze u uspořádaných kořenových stromů, protože u kořenových stromů a obecných stromů se může lišit pořadí potomků jednotlivých vrcholů. Právě proto vznikla modifikace, která se nazývá „minimální kód stromu“.<br>Minimální kód stromu je modifikace kódování stromu, kde je slovníkové uspořádání (také nazýváno „lexikografické uspořádání“) potomků vrcholů. Minimální kód stromu, tak může určit isomorfismus i kořenových a obecných stromů. Platí zde stejné pravidlo jako u kódování stromu. Pokud se řetězce minimálního kódu dvou stromů rovnají, tak jsou tyto dva stromy isomorfní.<br>Jediný rozdíl při tvorbě minimálního kódu stromu je ten, že každý vrchol s následníky nemá kódy následníků seřazené zleva doprava, ale musí mít slovníkové uspořádání. Uspořádání probíhá tak, že se porovnávají nuly a jedničky v kódech následníků znak po znaku zleva doprava. Jakmile jsou tedy na stejné pozici různé znaky (tedy nula a jednička) řetězec s jedničkou půjde nakonec, protože ta je větší než nula. Pokud je jeden řetězec kratší a celý je identický s částí druhého řetězce znamená to, že je menší a půjde dopředu, protože v druhém delším řetězci musí být minimálně ještě jedna jednička. Pokud jsou řetězce identické i délkou, tak na pořadí nezáleží.",
                                "images": [
                                    {
                                        "imagePath": "/images/minimalni_kod.jpeg",
                                        "imageDescription": "Minimální kód stromu",
                                        "aspectRatio": "2"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Do jednotlivých vrcholů zapiš správný minimální kód daného vrcholu a do kořene minimální kód celého stromu.",
                                "images": null,
                                "exercise": {
                                    "name": "minimalCode11"
                                }
                            },
                        ]
                    }
                ],
            }
        ]
    },
    {
        "name": "Binární stromy",
        "path": "/binarni-stromy",
        "textData": null,
        "tabs": null,
        "subpages": [
            {
                "name": "Základní definice",
                "path": "zakladni-definice",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Binární strom je kořenový strom, kde každý vrchol má maximálně dva potomky. Potomci jsou označováni jako pravý a levý potomek nebo syn a to zejména v případě pokud jsou potomci poslední v hierarchii. Pokud mají potomci také své syny a hierarchie pokračuje používá se označení levý a pravý podstrom.",
                        "images": null
                    },
                    {
                        "smallTitle": "Konverze obecného stromu na binární",
                        "text": "Tato technika se skládá z následujících dvou kroků.<ol><li>Vložení nových hran, které spojí všechny sourozenecké vrcholy.</li><li>pojeným sourozeneckým vrcholům zároveň odebereme všechny hrany, které do nich vedou od jejich rodiče kromě jediné – hrana nacházející se nejvíce vlevo zůstane.</li>\n</ol>Volitelném krokem je natočení celého grafu o 45° pro lepší znázornění pravého a levého podstromu.",
                        "images": [
                            {
                                "imagePath": "/images/bin.jpeg",
                                "imageDescription": "Převod obecného stromu (vlevo) na binární",
                                "aspectRatio": "3"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Binární vyhledávací strom",
                "path": "binarni-vyhledavaci-strom",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Binární vyhledávací strom (BVS) v angličtině Binary Search Tree (BST) je typ binárního stromu. Je speciálně upraven pro účely efektivního vyhledávání, vkládání a mazání vrcholů. Každý vrchol uchovává hodnotu (klíč). V levém podstromu jsou všechny hodnoty menší než v rodičovském vrcholu a pravém podstromu naopak všechny hodnoty větší. Toto pravidlo platí pro všechny vrcholy stromu. Zároveň tato vlastnost umožňuje jednoduché a rychlé vyhledávání.<br>Z tohoto důvodu jsou BVS ve velké míře používány v informatice. Tvoří důležité datové struktury. Slouží pro ukládání prvků, které jsou seřazeny podle svého identifikátoru (klíče), aby poté mohly být rychle vyhledány. Vyhledání hodnoty trvá průměrně logaritmický čas O(log n) za předpokladu, že je BVS správně vyvážený. Čím méně je balancovaný a bude se podobat více seznamu, tím více se bude vyhledávání blížit lineární časové složitosti O(n). Proto je velmi důležité udržovat strom vyvážený a tomu přizpůsobit mazání a vkládání dalších hodnot, které by měly udržovat strom stále vyvážený.",
                                "images": [
                                    {
                                        "imagePath": "/images/bvs.jpeg",
                                        "imageDescription": "Příklad nevyváženého BVS (vlevo) a vyváženého BVS",
                                        "aspectRatio": "3"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "Operace nad BVS",
                                "text": "Nad BVS lze definovat dva typy operací. Prvním typem operací jsou dotazy.<ul><li><b>Vyhledání</b> – Vyhledá a vrátí prvek podle klíče, pokud se v BVS nachází.</li><li><b>Minimum a maximum</b> – Vyhledá prvek s minimální nebo maximální hodnotou klíče. Minimální je prvek nejvíc vlevo a maximální prvek nejvíc vpravo.</li><li><b>Předchůdce a následník</b> – Vyhledá prvek s předchozí menší hodnotou nebo prvek s další větší hodnotou.</li></ul>Druhým typem operací jsou operace upravující.<ul><li><b>Vložení</b> – Přidá prvek do BVS na vhodný prázdný list, tak aby zachoval vlastnosti BVS.</li><li><b>Smazání</b> – Odebere prvek z BVS, tak aby strom zůstal správně uspořádaný.</li></ul>",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady – BVS",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 25, 1, 18, 5, 31, 14, 30, 31, 4, 40, 60",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 15, 13, 20, 7, 14, 18, 25, 100, 21, 2, 10",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 23, 15, 30, 7, 18, 35, 25, 28, 29, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 40, 25, 7, 8, 50, 45, 53, 2, 37, 39",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 18, 52, 6, 5, 28, 38, 48, 11, 13, 12",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 42, 70, 21, 4, 52, 62, 22, 32, 5, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 13, 8, 19, 7, 20, 15, 14, 5, 3, 2, 4",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 28, 16, 38, 10, 40, 30, 8, 32, 4, 2, 12",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 33, 43, 13, 23, 53, 3, 5, 15, 25, 35",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 32, 17, 43, 7, 40, 5, 30, 16, 13, 8",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla: 17, 7, 27, 3, 13, 23, 5, 15, 25, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree11"
                                }
                            },
                        ]
                    },
                    {
                        "name": "Příklady – Odstranění kořene",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Průchody binárního stromu",
                "path": "pruchod-stromu-do-hloubky",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "In-order, pre-order a post-order jsou způsoby průchodu binárním stromem do hloubky, tedy metody, kterými lze projít a zpracovat všechny vrcholy ve stromu. Každý z těchto průchodů má specifické pořadí, v jakém jsou uzly procházeny, což má za následek různé aplikace a využití.<ul><li><b>Preorder</b> – Rodič se zpracuje jako první, následovaný jeho levým podstromem a poté pravým podstromem.</li><li><b>Inorder</b> – Pro každého rodiče se nejprve zpracuje jeho levý podstrom, poté se zpracuje samotný rodič a nakonec jeho pravý podstrom.</li><li><b>Postorder</b> – Nejprve zpracují oba podstromy rodiče (první levý, poté pravý) a až poté samotný kořen. </ul></li>Pořadí preorder a postoder je běžně používané i pro obecné kořenové stromy, ale inorder má význam hlavně pro binární stromy. Výběr konkrétního průchodu závisí na požadovaném výstupu a úloze, která je potřeba řešit.",
                                "images": null
                            },
                            {
                                "smallTitle": "Preorder",
                                "text": "Preorder průchod je obecně vhodný pro klonování stromu, protože zachovává strukturu originálního stromu a to vede k vytvoření identické kopie původního stromu. V oblasti kompilátorů se preorder průchod používá pro zpracování syntaktických stromů, kdy je třeba interpretovat nebo vykonávat instrukce podle pořadí, v jakém byly ve zdrojovém kódu napsány.",
                                "images": null
                            },
                            {
                                "smallTitle": "Inorder",
                                "text": "Inorder průchod produkuje hodnoty v seřazeném pořadí (vzestupně). Tento průchod je proto ideální pro operace, kde je potřeba získat data ve vzestupném nebo sestupném pořadí. Pro sestupné pořadí je nutné algoritmus otočit a začít pravým podstromem. Tomuto procesu se také říká reverzní inorder. Používá se také v databázích pro stromové indexy.",
                                "images": null
                            },
                            {
                                "smallTitle": "Postorder",
                                "text": "Postorder průchod je ideální pro dealokaci paměti používané stromem, protože nejprve uvolní paměť všech potomků před samotným rodičem. Tím se zajistí, že při uvolňování paměti nedojde k pokusu o přístup k již uvolněným prvkům. Také se využívá pro  vyhodnocení matematických výrazů, kde operátory jsou vnitřní vrcholy a operandy jsou listy. Tento průchod umožňuje vyhodnotit nejprve operandy a pak aplikovat operátory ve správném pořadí.",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering1",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "22, 5, 2, 11, 7, 14, 30, 25, 33, 38, 60",
                                        "inOrder": "2, 5, 7, 11, 14, 22, 25, 30, 33, 38, 60",
                                        "postOrder": "2, 7, 14, 11, 5, 25, 60, 38, 33, 30, 22",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering2",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "15, 3, 7, 2, 10, 20, 18, 25, 21, 100",
                                        "inOrder": "2, 7, 10, 13, 15, 18, 20 ,21, 25, 100",
                                        "postOrder": "2, 10, 7, 13, 18, 21, 100, 23, 20, 15",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering3",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "15, 3, 7, 2, 10, 20, 18, 25, 21, 100",
                                        "inOrder": "2, 7, 10, 13, 15, 18, 20 ,21, 25, 100",
                                        "postOrder": "2, 10, 7, 13, 18, 21, 100, 23, 20, 15",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering4",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "40, 25, 7, 2, 8, 37, 39, 50, 45, 53",
                                        "inOrder": "2, 7, 8, 25, 37, 39, 40, 45, 50, 53",
                                        "postOrder": "2, 8, 7, 39, 37, 25, 45, 53, 50, 40",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering5",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "18, 6, 5, 11, 13, 12, 52, 28, 38, 48",
                                        "inOrder": "5, 6, 11, 12, 13, 18, 28, 38, 48, 52",
                                        "postOrder": "5, 12, 13, 11, 6, 48, 38, 28, 52, 18",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering6",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "42, 21, 4, 1, 5, 22, 32, 70, 52, 62",
                                        "inOrder": "1, 4, 5, 21, 22, 32, 52, 52, 62, 70",
                                        "postOrder": "1, 5, 4, 32, 22, 21, 62, 52, 70, 42",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering7",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "13, 8, 7, 5, 3, 2, 4, 19, 15, 14, 20",
                                        "inOrder": "2, 3, 4, 5, 7, 8, 13, 14, 15, 19, 20",
                                        "postOrder": "2, 4, 3, 5, 7, 8, 14, 15, 20, 19, 13",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering8",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "28, 16, 10, 8, 4, 2, 12, 38, 30, 32, 40",
                                        "inOrder": "2, 4, 8, 10, 12, 16, 28, 30, 32, 38, 40",
                                        "postOrder": "2, 4, 8, 12, 10, 16, 32, 30, 40, 38, 28",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering9",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "33, 17, 13, 3, 5, 15, 23, 25, 43, 35, 53",
                                        "inOrder": "3, 5, 13, 15, 17, 23, 25, 33, 35, 43, 53",
                                        "postOrder": "5, 3, 15, 13, 25, 23, 17, 35, 53, 43, 33",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering10",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "32, 17, 7, 5, 16, 13, 8, 30, 43, 40",
                                        "inOrder": "5, 7, 8, 13, 16, 17, 30, 32, 40, 43",
                                        "postOrder": "5, 8, 13, 16, 7, 30, 17, 40, 43, 32",
                                    },
                                },
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Zapiš průchod vrcholy zobrazeného stromu. Jako nápovědu lze využít animaci.",
                                "images": null,
                                "exercise": {
                                    "name": "ordering11",
                                    "dfs": true,
                                    "data": {
                                        "preOrder": "17, 7, 3, 1, 5, 13, 15, 27, 23, 25",
                                        "inOrder": "1, 3, 5, 7, 13, 15, 17, 23, 25, 27",
                                        "postOrder": "1, 5, 3, 15, 13, 7, 25, 23, 27, 17",
                                    },
                                },
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Halda",
                "path": "halda",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Označovaná také jako binární halda. Je datová struktura pole, kterou lze zobrazit jako kompletní binární strom. To znamená, že halda je binární strom, kde jsou všechny vrstvy zaplněny vrcholy s výjimkou poslední vrstvy, která nemusí být zaplněna celá. Pokud tomu, tak není je postupně zaplněna zleva, aby nevzniklo mezi vrcholy volné místo. Binární halda se dělí na dva následující typy.<ul><li><b>Max-halda</b> – Pro každý prvek s výjimkou kořene platí, že hodnota klíče rodiče je větší nebo rovna hodnotě klíče potomka. Maximální hodnota je tedy uložena v kořenu.</li><li><b>Min-halda</b> – Analogicky pro každý prvek s výjimkou kořene platí, že hodnota klíče rodiče je menší nebo rovna hodnotě klíče potomka. Minimální hodnota je uložena v kořenu.</ul></li>",
                                "images": [
                                    {
                                        "imagePath": "/images/halda.jpeg",
                                        "imageDescription": "Příklad min-haldy (vlevo) a max-haldy",
                                        "aspectRatio": "3"
                                    }
                                ]
                            },
                            {
                                "smallTitle": "",
                                "text": "Pokud nezáleží o jaký typ haldy se jedná obecně se použije označení jen  „halda“.<br>Hlavní výhodou haldy je rychlé vkládání prvků a také získání prvku s minimální nebo maximální hodnotou v čase O(log n). Z tohoto důvodu je halda často používána pro implementaci prioritních front. Například i Dijkstrův algoritmus pro hledání nejkratší cesty využívá prioritní frontu implementovanou jako min-haldu pro efektivní výběr nejbližšího vrcholu k prozkoumání.",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady – Halda",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 25, 1, 18, 5, 31, 14, 30, 31, 4, 40, 60",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 15, 13, 20, 7, 14, 18, 25, 100, 21, 2, 10",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 23, 15, 30, 7, 18, 35, 25, 28, 29, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 40, 25, 7, 8, 50, 45, 53, 2, 37, 39",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 18, 52, 6, 5, 28, 38, 48, 11, 13, 12",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 42, 70, 21, 5, 52, 62, 22, 32, 5, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 13, 8, 19, 7, 20, 15, 14, 5, 3, 2, 4",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 28, 16, 38, 10, 40, 30, 8, 32, 4, 2, 12",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 33, 43, 13, 23, 53, 3, 5, 15, 25, 35",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 32, 17, 43, 7, 40, 5, 30, 16, 13, 8",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla: 17, 7, 27, 3, 13, 23, 5, 15, 25, 1",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda11"
                                }
                            },
                        ]
                    },
                    {
                        "name": "Příklady – Odstranění kořene",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Další varianty",
                "path": "dalsi-varianty",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Existují další varianty BVS, které se BVS a jeho operace snaží optimalizovat pro různé specifické aplikace.",
                        "images": null
                    },
                    {
                        "smallTitle": "AVL stromy",
                        "text": "Pojmenovány po objevitelích G. M. Adeľson-Velskijovi a Je. M. Landisovi. Jsou jednou z prvních samo-vyvažujících se variant BVS. Pro každý vrchol garantují, že výškový rozdíl levého a pravého podstromu je maximálně 1. Tato vlastnost zajistí, že operace vyhledávání, vkládání a mazání mají časovou složitost O(log n).",
                        "images": null
                    },
                    {
                        "smallTitle": "Červeno-černé stromy",
                        "text": "Jsou další variantou samo-vyvažujících se BVS. Každý vrchol v sobě drží vlastnost navíc a tou je barva. Každý vrchol je buď červený nebo černý. Kořen a každý list je vždy černý. Pokud je vrchol červený, tak oba jeho potomci jsou  černí. Pro každý vrchol platí, že všechny cesty do listů obsahují stejný počet černých vrcholů. Tyto pravidla zajišťují vyváženost. Oproti AVL stromům jsou méně balancované, ale nevyžadují častou rotaci během vkládání a odebírání prvků, proto jsou vhodnější tam, kde je potřeba častěji vkládat a odebírat oproti hledání. Používají je například datové struktury v programovacím jazyce Java – TreeMap a TreeSet.",
                        "images": null
                    },
                    {
                        "smallTitle": "B-stromy",
                        "text": "B-stromy nejsou přímo variantou BVS, protože nejsou binární. Přesnější označení by bylo balancované vyhledávací stromy. Jsou podobné červeno-černým stromům, ale můžou mít mnohem více potomků. B-stromy rozšiřují koncepty BVS pro použití v databázových systémech a souborových systémech, kde optimalizují přístupy k disku tím, že udržují více klíčů v jednom vrcholu a umožňují víceúrovňové indexování. Jsou klíčové pro efektivní uložení a vyhledávání dat ve velkých objemech.",
                        "images": null
                    },
                    {
                        "smallTitle": "Treaps",
                        "text": "Z anglického spojení slov „Tree“ a  „Heaps“. Treaps tedy kombinují vlastnosti BVS a binárních hald (heaps). Vrcholy v těchto stromech mají přiřazený klíč (vlastnost BVS) a prioritu (vlastnost heapu). Strom je náhodně vyvážen pomocí priorit generovaných náhodně nebo na základě jiné metriky. Očekávána složitost hledání, přidání a odebírání prvků je O(log n).",
                        "images": null
                    },
                    {
                        "smallTitle": "Splay stromy",
                        "text": "Splay stromy jsou specifické tím, že se podle svých autorů samo-optimalizují. Používají „splay“ operace, které se provedou při každém přístupu (operaci) ke stromu včetně vyhledávání, vkládání nebo mazání. Princip je takový, že vrcholy, ke kterým se přistupovalo nedávno se posouvají blíže ke kořeni. Tím se zlepšuje průměrná časová složitost budoucích operací právě pro tyto vrcholy.",
                        "images": null
                    },
                    {
                        "smallTitle": "",
                        "text": "Další méně známé varianty vyvážených binárních stromů jsou například váhově-vyvážené stromy, „k-neighbor“ a „scapegoat“ stromy. ",
                        "images": null
                    }
                ]
            }
        ]
    },
    {
        "name": "Kostra",
        "path": "/kostra",
        "textData": null,
        "subpages": null,
        "tabs": [
            {
                "name": "Detail",
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Kostra grafu je strom daného spojitého grafu, který zahrnuje všechny vrcholy původního grafu. Pro spojitý graf s N vrcholy má kostra vždy N - 1 hran. Kostra grafu tedy spojuje všechny vrcholy původního grafu s co nejmenším počtem hran a neobsahuje žádné kružnice. V závislosti na typu grafu existují postupy jak určit počet možných koster grafu.",
                        "images": null,
                    },
                    {
                        "smallTitle": "Definice kostry grafu:",
                        "text": "Kostra grafu G=(V,E) je strom T=(V,E´), který obsahuje všechny vrcholy grafu a E´ &sube; E, tj. acyklický a souvislý faktor grafu G. <br><br> Kostra grafu je minimální souvislý podgraf grafu G obsahující všechny jeho vrcholy. Je to strom \"rozpínající se\" do všech vrcholů daného grafu (spanning tree). Jak dále uvidíme, v daném grafu může existovat více koster.<br>",
                        "images": [
                            {
                                "imagePath": "/images/kostra.png",
                                "imageDescription": "Graf na kterém budou znázorněny kostry",
                                "aspectRatio": "2"
                            },
                            {
                                "imagePath": "/images/kostra_kostry.png",
                                "imageDescription": "Kostry grafu",
                                "aspectRatio": "6"
                            }
                        ],
                    }
                ]
            },
            {
                "name": "Příklady",
                "textData": [
                    {
                        "smallTitle": "Příklad 1",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning1"
                        }
                    },
                    {
                        "smallTitle": "Příklad 2",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning2"
                        }
                    },
                    {
                        "smallTitle": "Příklad 3",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning3"
                        }
                    },
                    {
                        "smallTitle": "Příklad 4",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning4"
                        }
                    },
                    {
                        "smallTitle": "Příklad 5",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning5"
                        }
                    },
                    {
                        "smallTitle": "Příklad 6",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning6"
                        }
                    },
                    {
                        "smallTitle": "Příklad 7",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning7"
                        }
                    },
                    {
                        "smallTitle": "Příklad 8",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning8"
                        }
                    },
                    {
                        "smallTitle": "Příklad 9",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning9"
                        }
                    },
                    {
                        "smallTitle": "Příklad 10",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning10"
                        }
                    },
                    {
                        "smallTitle": "Příklad 11",
                        "text": "Urči počet možných koster v grafu.",
                        "images": null,
                        "exercise": {
                            "name": "spanning11"
                        }
                    },
                ]
            }
        ]
    },
    {
        "name": "Minimální kostra",
        "path": "/minimalni-kostra",
        "textData": null,
        "tabs": null,
        "subpages": [
            {
                "name": "Základní definice",
                "path": "zakladni-definice",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Problém minimální kostry z anglického MST je úloha nalezení takové kostry v grafu, jejíž součet vah (každá hrana je ohodnocena) všech hran v kostře je minimální ze všech možných koster grafu. Tento problém je aplikovatelný na mnoho reálných situací jako je projektování a optimalizace všech typů sítí například telekomunikační, elektrické, silniční, železniční a další.",
                        "images": [
                            {
                                "imagePath": "/images/min_kostra.jpeg",
                                "imageDescription": "Zvýrazněné hrany znázorňují minimální kostru grafu",
                                "aspectRatio": "2"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Kruskalův algoritmus",
                "path": "kruskaluv-algoritmus",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Kruskalův algoritmus začíná se seznamem všech hran v grafu, které jsou seřazené vzestupně podle váhy. Postupně přidává hrany, které mají nejmenší váhu a jejich přidání nevytváří kružnici. Takto algoritmus pokračuje, dokud kostra není kompletní. Hrany, které vytváří kružnici se zahazují.<br>Tento algoritmus je efektivní s řidším počtem hran. Zároveň nevyžaduje spojitost grafu od začátku. Spojitost může nastat až přidáním poslední hrany. Tento typ algoritmu je označován jako „hladový algoritmus“, který bere vždy hranu s nejmenší váhou a nehledí tedy na budoucí užitek. Tato strategie tedy nemusí být vždy nejlepší. Pokud problém aplikujeme například na hru šachy, tak brát vždy nejcennější figurku nemusí vést pokaždé k výhře.",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. <b>Dodržuj stanovené názvy hran</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Jarníkův (Primův) algoritmus",
                "path": "jarnikuv-algoritmus",
                "tabs": [
                    {
                        "name": "Detail",
                        "textData": [
                            {
                                "smallTitle": "",
                                "text": "Jarníkův algoritmus je obecně známější jako Primův algoritmus. Podle J. Matouška (Kapitoly z diskretni matematiky) ho však Jarník objevil mnohem dříve. To, že byl pravděpodobně nezávisle objeven více vědci v různých časových období zdůrazňuje jeho přínos.<br>Jarníkův algoritmus se podobá Dijkstrovu algoritmu pro hledání nejkratší cesty v grafu. Algoritmus začne v kořenovém nebo libovolně zvoleném vrcholu a vydá se hranou s nejnižší vahou do ještě nenavštíveného bodu. V dalším bodě přidá do vyhodnocování hrany vedoucí z tohoto bodu a opět zvolí cestu do nenavštíveného vrcholu s nejnižší vahou. Takto algoritmus pokračuje dokud nejsou navštíveny všechny vrcholy. Je efektivní pro husté grafy, kde je mnohem více hran než vrcholů. Jeho výkon také zvýší použití datové struktury min-haldy, kam lze vkládat hrany a najít nejníže ohodnocenou hranu v čase O(log n).",
                                "images": null
                            }
                        ]
                    },
                    {
                        "name": "Příklady",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik1"
                                }
                            },
                            {
                                "smallTitle": "Příklad 2",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik2"
                                }
                            },
                            {
                                "smallTitle": "Příklad 3",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik3"
                                }
                            },
                            {
                                "smallTitle": "Příklad 4",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik4"
                                }
                            },
                            {
                                "smallTitle": "Příklad 5",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik5"
                                }
                            },
                            {
                                "smallTitle": "Příklad 6",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik6"
                                }
                            },
                            {
                                "smallTitle": "Příklad 7",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik7"
                                }
                            },
                            {
                                "smallTitle": "Příklad 8",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik8"
                                }
                            },
                            {
                                "smallTitle": "Příklad 9",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik9"
                                }
                            },
                            {
                                "smallTitle": "Příklad 10",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik10"
                                }
                            },
                            {
                                "smallTitle": "Příklad 11",
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. <b>Dodržuj stanovené názvy hran</b>. Začni vrcholem <b>a</b>.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik11"
                                }
                            },
                        ]
                    }
                ],
            },
            {
                "name": "Borůvkův algoritmus",
                "path": "boruvkuv-algoritmus",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Je označován za jeden z prvních algoritmů pro řešení problému minimální kostry. Oproti Kruskalovu a Jarníkovu algoritmu je však podstatně složitější a v praxi se používá spíše sporadicky.<br>Na začátku algoritmus považuje každý vrchol za samostatnou komponentu. Pro každou komponentu se poté hledá hrana s nejnižší vahou do jiné komponenty a komponenty se takto sloučí. Takto se pokračuje v dalších iteracích a počet komponent se postupně snižuje. Iterace pokračují dokud všechny původní komponenty nejsou sloučeny do jedné a proces je ukončen.<br>Algoritmus je efektivnější spíše pro řidší grafy. Jeho hlavní výhoda spočívá v možnosti paralelního zpracování komponent v jednotlivých iteracích. ",
                        "images": null
                    }
                ]
            }
        ]
    },
    {
        "name": "Prohledávání do hloubky",
        "path": "/prohledavani-do-hloubky",
        "subpages": null,
        "tabs": [
            {
                "name": "Detail",
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Prohledávání stromu do hloubky v angličtině Depth-first search (DFS) na rozdíl od BFS, který prohledává postupně všechny vrcholy v jedné určité vzdálenosti jde algoritmus DFS vždy nejhlouběji co to jde. Vrcholy jsou zde ukládány do zásobníku (LIFO) z angl. stack. Algoritmus prochází z první zvoleného vrcholu do prvního neprozkoumaného vrcholu ve kterém ještě nebyl a takto postupně prochází vrcholy do hloubky, dokud nenarazí na poslední vrchol nebo cesta nevede do vrcholu v kterém už byl. V ten moment se postupně vrací na začátek ke zdrojovému vrcholu dokud po cestě nenalezne hranu, která vede do dalšího neprozkoumaného vrcholu. Takto pokračuje dokud nezbudou žádné neprozkoumané vrcholy. DFS je často používáno v algoritmech hledání cest, detekce cyklů, topologické řazení a řešení bludiště. Pro oba typy algoritmů se používá technika obarvení vrcholů, které značí jejich stav v algoritmu.",
                        "images": [
                            {
                                "imagePath": "/images/prohledavani.png",
                                "imageDescription": "Graf pro znázornění prohledávání do hloubky",
                                "aspectRatio": "4"
                            },
                            {
                                "imagePath": "/images/prohledavani_hloubka.png",
                                "imageDescription": "Výsledný strom po prohledávání do hloubky",
                                "aspectRatio": "2"
                            }
                        ],
                    }
                ]
            },
            {
                "name": "Příklady",
                "textData": [
                    {
                        "smallTitle": "Příklad 1",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH1",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 2",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH2",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 3",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH3",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 4",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH4",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 5",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH5",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 6",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH6",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 7",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH7",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 8",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH8",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 9",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH9",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 10",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH10",
                            "fifo": false
                        }
                    },
                    {
                        "smallTitle": "Příklad 11",
                        "text": "Řeš příklad prohledávání do hloubky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH11",
                            "fifo": false
                        }
                    },
                ]
            }
        ],
    },
    {
        "name": "Prohledávání do šířky",
        "path": "/prohledavani-do-sirky",
        "subpages": null,
        "tabs": [
            {
                "name": "Detail",
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Prohledávání stromu do šířky v angličtině Breadth-first search (BFS) je algoritmus na sys- tematické prozkoumávání všech sousední vrcholů a poté jejich sousedů. Začíná se zvoleným vrcholem, kdy se všechny jeho sousední vrcholy vloží do fronty (FIFO) z angl. queue. Ná- sledně se veme další vrchol z fronty a opět se jeho sousední vrcholy, které ještě nejsou ve frontě do ní vloží. Takto algoritmus pokračuje dokud neprojde všechny vrcholy ve frontě. Svůj název získal, protože rozšiřuje hranici objevených vrcholů vždy jednotně o stejnou vzdálenost. Nejdříve objeví sousedy prvního vybraného vrcholu a poté sousedy těchto sou- sedů, tedy vždy objevuje vrcholy na stejné hranici vzdálenosti od zdrojového vrcholu. BFS je často používán k nalezení nejkratší cesty v nevážených grafech, protože garantuje, že pokud existuje cesta, první nalezená cesta bude nejkratší. BFS je také užitečný pro prohledávání stromů a grafů ve scénářích, kde je důležitá úroveň nebo vzdálenost od kořene, například v síťových protokolech. Tento algoritmus slouží také jako základ pro Jarníkův algoritmus pro nalezení minimální kostry.",
                        "images": [
                            {
                                "imagePath": "/images/prohledavani.png",
                                "imageDescription": "Graf pro znázornění prohledávání do šířky",
                                "aspectRatio": "4"
                            },
                            {
                                "imagePath": "/images/prohledavani_sirka.png",
                                "imageDescription": "Výsledný strom po prohledávání do šířky",
                                "aspectRatio": "3"
                            }
                        ],
                    }
                ]
            },
            {
                "name": "Příklady",
                "textData": [
                    {
                        "smallTitle": "Příklad 1",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH1",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 2",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH2",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 3",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH3",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 4",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH4",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 5",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH5",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 6",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH6",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 7",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH7",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 8",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH8",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 9",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH9",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 10",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH10",
                            "fifo": true
                        }
                    },
                    {
                        "smallTitle": "Příklad 11",
                        "text": "Řeš příklad prohledávání do šířky, název hrany zapisuj vždy podle lexikografické pravidla tj. vrcholy seřazené podle abecedy.",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH11",
                            "fifo": true
                        }
                    },
                ]
            }
        ],
    }
];
export default pages;