import { Service } from 'typedi';
import { CardapioItem, ICardapioItem } from "../cardapio-item";
import { IServiceBase } from "../base-entity";
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { ResponseData } from "../response-data";

@Service()
export class CardapioItemService implements IServiceBase<ICardapioItem, CardapioItem | ResponseData> {

    @OrmRepository(CardapioItem) repository: Repository<CardapioItem>;

    create(props: ICardapioItem): Promise<ResponseData> {
        let cardapioItem = plainToClass(CardapioItem, props);
        let responseData = new ResponseData();
        return validate(cardapioItem)
            .then(errors => {
                if (errors.length > 0) {
                    errors.forEach(function (val) {
                        responseData.mensagens.push(val.value);
                    });
                    responseData.objeto = props;
                    responseData.status = true;
                }
                else {
                    responseData.mensagens.push("OK!");
                    responseData.objeto = this.repository.persist(cardapioItem);
                }
                return responseData;
            });
    }
    readOne(id: number): Promise<CardapioItem> {
        let result: any = {};
        try {
            result = this.repository
                .findOneById(id)
                .then()
                .catch(res => (result = res));
        } catch {
            // console.log(Error);
        }
        return result;
    }
    update(props: ICardapioItem): Promise<CardapioItem> {
        return this.repository.persist(props);
    }
    drop(id: number): Promise<CardapioItem> {
        let result: any = {};
        try {
            result = this.readOne(id)
                .then(res => (result = res))
                .catch(res => (result = res));

            result = this.repository.remove(result)
                .then()
                .catch(res => (result = res));
        } catch {
            // console.log(Error);
        }
        return result;
    }
    readAll(): Promise<CardapioItem[]> {
        return this.repository.find();
    }
}
