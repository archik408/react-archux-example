import { expect } from 'chai';

import Validation from '../validation';

describe('Validation service', () => {
  describe('Check "IsExcelFile', () => {
    const xlsType = 'application/vnd.ms-excel';
    const xlsxType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';

    it('should return true for: ".xls", ".xlsx" types', () => {
      const xls = { name: 'file.xls', type: xlsType };
      const xlsx = { name: 'file.xlsx', type: xlsxType };

      expect(Validation.isExcelFile(xls)).to.be.equal(true);
      expect(Validation.isExcelFile(xlsx)).to.be.equal(true);
      expect(Validation.isExcelFile({ name: 'file.xls', type: '' })).to.be.equal(true);
      expect(Validation.isExcelFile({ name: 'file.xlsx', type: '' })).to.be.equal(true);
    });

    it('should return true for: ".XLS", ".XLSX" types', () => {
      const xls = { name: 'file.XLS', type: xlsType };
      const xlsx = { name: 'file.XLSX', type: xlsxType };

      expect(Validation.isExcelFile(xls)).to.be.equal(true);
      expect(Validation.isExcelFile(xlsx)).to.be.equal(true);
      expect(Validation.isExcelFile({ name: 'file.XLS', type: '' })).to.be.equal(true);
      expect(Validation.isExcelFile({ name: 'file.XLSX', type: '' })).to.be.equal(true);
    });

    it('should return false for other types and extensions', () => {
      expect(Validation.isExcelFile({ name: 'file.jpg', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.png', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({})).to.be.equal(false);
      expect(Validation.isExcelFile()).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.svg', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.exe' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.mp3' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.json', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.pdf' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.mp4' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.avi' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/excel' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/x-msexcel' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/vnd.ms-excel.sheet.macroEnabled.12' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/vnd.ms-excel.template.macroEnabled.12' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/vnd.ms-excel.addin.macroEnabled.12' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xls', type: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlt', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xla', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltx', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsm', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltm', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlam', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsb', type: xlsType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlt', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xla', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltx', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsm', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltm', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlam', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsb', type: xlsxType })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlt', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xla', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltx', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsm', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xltm', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlam', type: '' })).to.be.equal(false);
      expect(Validation.isExcelFile({ name: 'file.xlsb', type: '' })).to.be.equal(false);
    });
  });

  describe('Check "IsEmpty', () => {
    it('should return false for specific values', () => {
      expect(Validation.isEmpty('1')).to.be.equal(false);
      expect(Validation.isEmpty('   1   ')).to.be.equal(false);
      expect(Validation.isEmpty(1)).to.be.equal(false);
      expect(Validation.isEmpty({})).to.be.equal(false);
      expect(Validation.isEmpty(true)).to.be.equal(false);
    });

    it('should return true for specific values', () => {
      expect(Validation.isEmpty('')).to.be.equal(true);
      expect(Validation.isEmpty(' ')).to.be.equal(true);
      expect(Validation.isEmpty([])).to.be.equal(true);
      expect(Validation.isEmpty(null)).to.be.equal(true);
      expect(Validation.isEmpty(undefined)).to.be.equal(true);
      expect(Validation.isEmpty()).to.be.equal(true);
      expect(Validation.isEmpty(false)).to.be.equal(true);
    });
  });

  describe('Check "IsEmail', () => {
    it('should return true for specific values', () => {
      expect(Validation.isEmail('1@a.aa')).to.be.equal(true);
      expect(Validation.isEmail('email@mail.ru')).to.be.equal(true);
      expect(Validation.isEmail('email1@mail.ru')).to.be.equal(true);
      expect(Validation.isEmail('email@mail1.ru')).to.be.equal(true);
    });

    it('should return false for specific values', () => {
      expect(Validation.isEmail('')).to.be.equal(false);
      expect(Validation.isEmail(' ')).to.be.equal(false);
      expect(Validation.isEmail([])).to.be.equal(false);
      expect(Validation.isEmail(null)).to.be.equal(false);
      expect(Validation.isEmail(undefined)).to.be.equal(false);
      expect(Validation.isEmail()).to.be.equal(false);
      expect(Validation.isEmail(false)).to.be.equal(false);
      expect(Validation.isEmail(true)).to.be.equal(false);
      expect(Validation.isEmail({})).to.be.equal(false);
      expect(Validation.isEmail('1')).to.be.equal(false);
      expect(Validation.isEmail('   1   ')).to.be.equal(false);
      expect(Validation.isEmail(1)).to.be.equal(false);
      expect(Validation.isEmail('1@11.11')).to.be.equal(false);
      expect(Validation.isEmail('a@a.a1')).to.be.equal(false);
      expect(Validation.isEmail('a@a.1a')).to.be.equal(false);
      expect(Validation.isEmail('aa.1a')).to.be.equal(false);
      expect(Validation.isEmail('aa@.')).to.be.equal(false);
      expect(Validation.isEmail('aa@')).to.be.equal(false);
      expect(Validation.isEmail('    email@mail.ru')).to.be.equal(false);
      expect(Validation.isEmail('email@mail.ru    ')).to.be.equal(false);
    });
  });

  describe('Check "IsNumeric', () => {
    it('should return true for specific values', () => {
      expect(Validation.isNumeric(1)).to.be.equal(true);
      expect(Validation.isNumeric('1')).to.be.equal(true);
      expect(Validation.isNumeric(1.2)).to.be.equal(true);
      expect(Validation.isNumeric('1.2')).to.be.equal(true);
      expect(Validation.isNumeric(0.2)).to.be.equal(true);
      expect(Validation.isNumeric('0.2')).to.be.equal(true);
    });

    it('should return false for specific values', () => {
      expect(Validation.isNumeric('')).to.be.equal(false);
      expect(Validation.isNumeric(' ')).to.be.equal(false);
      expect(Validation.isNumeric([])).to.be.equal(false);
      expect(Validation.isNumeric(null)).to.be.equal(false);
      expect(Validation.isNumeric(undefined)).to.be.equal(false);
      expect(Validation.isNumeric()).to.be.equal(false);
      expect(Validation.isNumeric(false)).to.be.equal(false);
      expect(Validation.isNumeric(true)).to.be.equal(false);
      expect(Validation.isNumeric({})).to.be.equal(false);
      expect(Validation.isNumeric('1@')).to.be.equal(false);
      expect(Validation.isNumeric('text1')).to.be.equal(false);
    });
  });
});
