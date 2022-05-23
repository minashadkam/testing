import {
  LightswitchComponent,
  MasterService,
  ValueService,
  ReversePipe
} from './demo';


////////////////////////
describe('demo (no TestBed):', () => {

  describe('ReversePipe', () => {
    let pipe: ReversePipe;

    beforeEach(() => { pipe = new ReversePipe(); });

    it('transforms "abc" to "cba"', () => {
      expect(pipe.transform('abc')).toBe('cba');
    });

    it('no change to palindrome: "able was I ere I saw elba"', () => {
      const palindrome = 'able was I ere I saw elba';
      expect(pipe.transform(palindrome)).toBe(palindrome);
    });

  });

});
