// Libraries
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomerModel } from 'src/data/models';
import {
  AccountTypeEntity,
  CustomerEntity,
  CustomerRepository,
} from 'src/persistence';
import { v4 as uuid2 } from 'uuid';
import { AccountService } from '../account/account.service';

@Injectable()
export class SecurityService {
  constructor(
    private readonly customerRepository: CustomerRepository,
    private readonly accountService: AccountService,
  ) {}

  /**
   * Identificarse en el sistema
   *
   * @param {CustomerModel} user
   * @return {*}  {string}
   * @memberof SecurityService
   */
  signIn(user: CustomerModel): string {
    const answer = this.customerRepository.findOneByEmailAndPassword(
      user.email,
      user.password,
    );
    if (answer) return 'Falta retornar un JWT';
    else throw new UnauthorizedException('Datos de identificación inválidos');
  }

  /**
   * Crear usuario en el sistema
   *
   * @param {CustomerModel} user
   * @return {*}  {string}
   * @memberof SecurityService
   */
  signUp(user: CustomerModel): string {
    const newCustomer = new CustomerEntity();
    newCustomer.documentType = user.documentType;
    newCustomer.document = user.document;
    newCustomer.fullName = user.fullName;
    newCustomer.email = user.email;
    newCustomer.phone = user.phone;
    newCustomer.password = user.password;

    const customer = this.customerRepository.register(newCustomer);

    if (customer) {
      const accountType = new AccountTypeEntity();
      accountType.id = 'kjndkeswncfeṕrfk';
      const newAccount = {
        id: uuid2(), //no estaba
        customer,
        accountType,
        balance: 0, //no estaba
        state: true, //no estaba
      };

      //const account = this.accountService.createAccount(newAccount);
      //if (account) return 'Falta retornar un JWT';
      //else throw new InternalServerErrorException();
    } //else throw new InternalServerErrorException();
    return 'bien';
  }

  /**
   * Salir del sistema
   *
   * @param {string} JWToken
   * @memberof SecurityService
   */
  signOut(JWToken: string): void {
    throw new Error('Method not implemented.');
  }
}
