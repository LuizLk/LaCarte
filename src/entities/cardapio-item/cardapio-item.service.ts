import { Service } from 'typedi';
import { CardapioItem } from "../cardapio-item";
import { IServiceBase } from "../base-entity";
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { validate } from "class-validator";
import { ResponseData } from "../response-data";

@Service()
export class CardapioItemService implements IServiceBase<CardapioItem> {

    @OrmRepository(CardapioItem) private repository: Repository<CardapioItem>;

    create(props: CardapioItem, ...params: any[]): Promise<ResponseData> {
        let idCardapio = params[0];

        let responseData = new ResponseData();
        return validate(props)
            .then(errors => {
                if (errors.length > 0) {
                    errors.forEach(function (val) {
                        responseData.mensagens.push(val.value);
                    });
                    responseData.objeto = props;
                }
                else {
                    responseData.mensagens.push("OK!");
                    responseData.objeto = this.repository.persist(props);
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
    update(props: CardapioItem): Promise<CardapioItem> {
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
    readAll(...params: any[]): Promise<CardapioItem[]> {
        let idCardapio = params[0];
        return this.repository.find({ cardapio: idCardapio });
    }
}
