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
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Strom se řadí mezi jedny ze základních struktur v přírodě i v oblasti matematiky. Stromy v přírodě vynikají svou rozmanitou a výrazně složitou strukturou. Naopak stromy v rámci teorie grafů představují prakticky nejjednodušší varianty grafů, ačkoliv analýza jejich vlast- ností poskytuje zajímavý výzkumný prostor. V kontextu teorie grafů je strom definován jako konečný graf, to znamená, že počet jeho vrcholů je konečný.<br><b>Strom je souvislý graf, neobsahující kružnici (acyklický souvislý graf)</b>. <br> Strom obsahující pouze jeden vrchol, nazýváme triviálním stromem. Strom, který obsahuje alespoň dva vrcholy, nazveme netriviálním stromem.",
                        "images": [
                            {
                                "imagePath": "/images/strom.jpeg",
                                "imageDescription": "Příklad čtyř různých stromů",
                                "aspectRatio": "4"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Les",
                "path": "les",
                "tabs": null,
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
                    }
                ]
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
                            }
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
                            }
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
                    }
                ]
            },
            {
                "name": "Předchůdce / Následník",
                "path": "predchudce-naslednik",
                "tabs": null,
                "textData": [
                    {
                        "smallTitle": "",
                        "text": "Také se používá označení z „rodinné“ terminologie otec a syn. V kořenovém stromě, pokud existuje hrana vedoucí z vrcholu x do vrcholu y, pak je vrchol x považován za předchůdce vrcholu y a vrchol y je považován za následníka vrcholu x. Lze je oba označit jako předchůdce i následníka přímého, protože se jedná o sousední vrcholy. Vrcholy, které mají společného předchůdce lze také označit jako bratry. Analogicky se pak lze setkat s označením dědeček pro předchůdce předchůdce a vnuka pro následníka následníka, že se nejedná o přímého předchůdce a následníka lze zdůraznit přívlastkem „nepřímý“ předchůdce a následník.<br>V kořenovém stromě má tedy každý vrchol svého předchůdce s výjimkou kořene, ten předchůdce nemá. Pokud vrchol nemá žádného následníka je označován jako list. Pokud alespoň jednoho následníka má, tak se jedná o vnitřní vrchol.",
                        "images": null
                    }
                ]
            },
            {
                "name": "Vrstva / Hloubka / Výška",
                "path": "vrstva-hloubka-vyska",
                "tabs": null,
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
                    }
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
                    }
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
                "name": "Kořenové stromy",
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
                    }
                ]
            },
            {
                "name": "Uspořádané kořenové stromy",
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
                    }
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
                        "name": "Příklady – Tvorba",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vytvořte binární strom postupným vkládáním čísel pomocí operace insert.<br>Čísla:  25, 1, 18, 5, 31, 14, 30, 31, 4, 40, 60",
                                "images": null,
                                "exercise": {
                                    "name": "createBinaryTree1"
                                }
                            }
                        ]
                    },
                    {
                        "name": "Příklady – Mazání",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Odstraň kořen stromu a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInBinaryTree1"
                                }
                            }
                        ]
                    }
                ],
            },
            {
                "name": "Průchod stromu do hloubky",
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
                                }
                            }
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
                        "name": "Příklady – Tvorba",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Vytvořte haldu postupným vkládáním čísel pomocí operace insert.<br>Čísla:  25, 1, 18, 5, 31, 14, 30, 31, 4, 40, 60",
                                "images": null,
                                "exercise": {
                                    "name": "createHalda1"
                                }
                            }
                        ]
                    },
                    {
                        "name": "Příklady – Mazání",
                        "textData": [
                            {
                                "smallTitle": "Příklad 1",
                                "text": "Odstraň kořen haldy a nahraď ho správným vrcholem. Po správném přiřazení nové hodnoty kořene se označí vrcholy, které je potřeba přeskládat/smazat.",
                                "images": null,
                                "exercise": {
                                    "name": "deleteInHalda1"
                                }
                            }
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
                    }
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
                                "text": "Vyřeš příklad pomocí kruskalova algoritmu, využij grafické znázornění aby se nevytvořila kružnice",
                                "images": null,
                                "exercise": {
                                    "name": "kruskal1"
                                }
                            }
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
                                "text": "Vyřeš příklad pomocí jarníkova algoritmu, využij grafické znázornění aby se nevytvořila kružnice. Pří výběru hran se řiď lexikografickým pravidlem. Začni vrcholem a.",
                                "images": null,
                                "exercise": {
                                    "name": "jarnik1"
                                }
                            }
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
                        "text": "Prohledávání stromu do hloubky v angličtině Depth-first search (DFS) na rozdíl od BFS, který prohledává postupně všechny vrcholy v jedné určité vzdálenosti jde algoritmus 17 DFS vždy nejhlouběji co to jde. Vrcholy jsou zde ukládány do zásobníku (LIFO) z angl. stack. Algoritmus prochází z první zvoleného vrcholu do prvního neprozkoumaného vrcholu ve kterém ještě nebyl a takto postupně prochází vrcholy do hloubky, dokud nenarazí na poslední vrchol nebo cesta nevede do vrcholu v kterém už byl. V ten moment se postupně vrací na začátek ke zdrojovému vrcholu dokud po cestě nenalezne hranu, která vede do dalšího neprozkoumaného vrcholu. Takto pokračuje dokud nezbudou žádné neprozkoumané vrcholy. DFS je často používáno v algoritmech hledání cest, detekce cyklů, topologické řazení a řešení bludiště. Pro oba typy algoritmů se používá technika obarvení vrcholů, které značí jejich stav v algoritmu.",
                        "images": null,
                    }
                ]
            },
            {
                "name": "Příklady",
                "textData": [
                    {
                        "smallTitle": "Příklad 1",
                        "text": "Řeš příklad prohledávání do hloubky",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH1",
                            "fifo": false
                        }
                    }
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
                        "images": null,
                    }
                ]
            },
            {
                "name": "Příklady",
                "textData": [
                    {
                        "smallTitle": "Příklad 1",
                        "text": "Řeš příklad prohledávání do šířky",
                        "images": null,
                        "apsaph": {
                            "name": "APSAPH1",
                            "fifo": true
                        }
                    }
                ]
            }
        ],
    }
];
export default pages;