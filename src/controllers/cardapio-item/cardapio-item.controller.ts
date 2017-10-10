import { Body, Param, HttpCode, JsonController, Post, Get } from 'routing-controllers';
import { Inject } from 'typedi';
import { plainToClass } from "class-transformer";
import { CardapioItem, ICardapioItem, CardapioItemService } from '../../entities/cardapio-item';

@JsonController('/cardapio/:idCardapio/item')
export class CardapioItemController {

    @Inject()
    private cardapioItemService: CardapioItemService;

    @Post()
    @HttpCode(201)
    public httpPost(
        @Param("idCardapio")
        idCardapio: number,
        @Body({
            required: true
        }) props: ICardapioItem
        ): Promise<any> {
        let cardapioItem = plainToClass(CardapioItem, props);
        return this.cardapioItemService.create(cardapioItem, idCardapio);
    }

    @Get()
    public httpGetAll(
        @Param("idCardapio")
        idCardapio: number
    ): Promise<CardapioItem[]> {
        return this.cardapioItemService.readAll(idCardapio);
    }

    @Get("/:id")
    public httpGet(
        @Param("id")
        id: number
        ): Promise<CardapioItem> {
        return this.cardapioItemService.readOne(id);
    }
}
