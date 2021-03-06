import { TestBed, async } from '@angular/core/testing';
import { SearchComponent } from './search.component';
describe('SearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'search'`, async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('search');
  }));
  it('should render Filter Results in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(SearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Filter Results');
  }));
});
