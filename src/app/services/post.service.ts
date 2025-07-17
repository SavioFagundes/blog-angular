import { Injectable } from '@angular/core';
import { Post, Category } from '../models/post.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private posts: Post[] = [
    {
      id: 1,
      title: 'Os Melhores Filmes de Ficção Científica de 2024',
      content: `
        <p>A ficção científica em 2024 trouxe grandes surpresas para o cinema mundial. Neste artigo, vamos explorar os filmes que mais se destacaram no gênero.</p>
        
        <h3>1. Dune: Parte Dois</h3>
        <p>Denis Villeneuve continua sua adaptação épica do clássico de Frank Herbert. Com visuais deslumbrantes e uma narrativa envolvente, o filme consolida a saga como uma das melhores adaptações literárias dos últimos anos.</p>
        
        <h3>2. Furiosa: Uma Saga Mad Max</h3>
        <p>George Miller retorna ao mundo pós-apocalíptico de Mad Max com uma prequel focada na origem da personagem Furiosa. Anya Taylor-Joy entrega uma performance memorável.</p>
        
        <h3>3. Planeta dos Macacos: O Novo Reino</h3>
        <p>A franquia continua explorando temas profundos sobre sociedade e evolução, mantendo o alto padrão de qualidade que caracteriza a série.</p>
        
        <p>Estes filmes não apenas entretiveram, mas também fizeram refletir sobre questões importantes da humanidade.</p>
      `,
      excerpt: 'Descubra os filmes de ficção científica que mais impactaram o cinema em 2024, desde sequências épicas até histórias originais.',
      author: 'João Silva',
      date: new Date('2024-12-15'),
      category: 'Ficção Científica',
      tags: ['cinema', 'ficção científica', '2024', 'análise'],
      imageUrl: '/assets/image/Truffaut.jpg',
      readTime: 5
    },
    {
      id: 2,
      title: 'A Evolução do Horror no Cinema Moderno',
      content: `
        <p>O gênero horror tem passado por uma verdadeira renascença nos últimos anos. Diretores como Ari Aster, Robert Eggers e Jordan Peele têm redefinido o que significa assustar uma audiência.</p>
        
        <h3>O Horror Psicológico</h3>
        <p>Filmes como "Hereditário" e "Midsommar" mostram como o horror pode ser mais do que sustos baratos. Estes filmes exploram traumas familiares e ansiedades sociais de forma profunda.</p>
        
        <h3>Horror Social</h3>
        <p>Jordan Peele, com "Corra!" e "Nós", trouxe questões raciais e sociais para o centro do horror, criando uma nova subcategoria do gênero.</p>
        
        <h3>O Retorno do Horror Folclórico</h3>
        <p>Filmes como "A Bruxa" e "O Farol" de Robert Eggers mostram como elementos folclóricos podem ser aterrorizantes quando bem executados.</p>
      `,
      excerpt: 'Uma análise profunda sobre como o cinema de horror evoluiu e se reinventou na era moderna.',
      author: 'Maria Santos',
      date: new Date('2024-12-10'),
      category: 'Horror',
      tags: ['horror', 'cinema', 'análise', 'psicologia'],
      imageUrl: '/assets/image/Truffaut.jpg',
      readTime: 7
    },
    {
      id: 3,
      title: 'Clássicos do Cinema que Você Precisa Assistir',
      content: `
        <p>Todo cinéfilo tem uma lista de filmes clássicos que considera essenciais. Aqui estão algumas obras-primas que transcendem gerações.</p>
        
        <h3>Cidadão Kane (1941)</h3>
        <p>Orson Welles criou uma obra-prima que continua sendo estudada em escolas de cinema ao redor do mundo. Sua narrativa inovadora e técnicas cinematográficas revolucionárias influenciam cineastas até hoje.</p>
        
        <h3>Casablanca (1942)</h3>
        <p>Um dos romances mais icônicos do cinema, com diálogos memoráveis e performances inesquecíveis de Humphrey Bogart e Ingrid Bergman.</p>
        
        <h3>2001: Uma Odisséia no Espaço (1968)</h3>
        <p>Stanley Kubrick criou uma experiência cinematográfica única que questiona a existência humana e nosso lugar no universo.</p>
        
        <h3>O Poderoso Chefão (1972)</h3>
        <p>Francis Ford Coppola adaptou o romance de Mario Puzo criando uma saga familiar épica que redefiniu o cinema americano.</p>
      `,
      excerpt: 'Uma seleção cuidadosa de filmes clássicos que todo amante do cinema deveria conhecer.',
      author: 'Carlos Oliveira',
      date: new Date('2024-12-05'),
      category: 'Clássicos',
      tags: ['clássicos', 'cinema', 'história', 'cultura'],
      imageUrl: '/assets/image/Truffaut.jpg',
      readTime: 6
    },
    {
      id: 4,
      title: 'O Impacto dos Streamings na Indústria Cinematográfica',
      content: `
        <p>Os serviços de streaming revolucionaram completamente a forma como consumimos conteúdo audiovisual. Esta mudança trouxe benefícios e desafios únicos.</p>
        
        <h3>Democratização do Acesso</h3>
        <p>Plataformas como Netflix, Amazon Prime e Disney+ tornaram possível assistir a milhares de filmes por um preço acessível, democratizando o acesso à cultura cinematográfica.</p>
        
        <h3>Novos Formatos e Narrativas</h3>
        <p>As séries limitadas e os filmes originais dos streamings têm experimentado com formatos e narrativas que não seriam possíveis no cinema tradicional.</p>
        
        <h3>Desafios para os Cinemas</h3>
        <p>A pandemia acelerou uma tendência que já existia: muitas pessoas preferem assistir filmes em casa. Isso tem forçado os cinemas a se reinventarem.</p>
        
        <h3>O Futuro da Distribuição</h3>
        <p>O modelo híbrido de lançamento simultâneo nos cinemas e streaming pode ser o futuro da distribuição cinematográfica.</p>
      `,
      excerpt: 'Como os serviços de streaming transformaram a indústria do cinema e o que podemos esperar para o futuro.',
      author: 'Ana Costa',
      date: new Date('2024-11-28'),
      category: 'Indústria',
      tags: ['streaming', 'indústria', 'tecnologia', 'futuro'],
      imageUrl: '/assets/image/Truffaut.jpg',
      readTime: 8
    },
    {
      id: 5,
      title: 'Diretores Emergentes que Você Deveria Conhecer',
      content: `
        <p>O cinema contemporâneo está sendo moldado por uma nova geração de diretores talentosos. Conheça alguns nomes que estão redefinindo a sétima arte.</p>
        
        <h3>Chloé Zhao</h3>
        <p>Vencedora do Oscar por "Nomadland", Zhao traz uma sensibilidade única para retratar a América contemporânea, misturando realismo e poesia.</p>
        
        <h3>Lulu Wang</h3>
        <p>Com "A Despedida", Wang mostrou como histórias familiares podem ser universais, explorando temas de identidade cultural com delicadeza.</p>
        
        <h3>Nia DaCosta</h3>
        <p>Diretora de "Candyman" e "The Marvels", DaCosta representa uma nova voz no cinema de gênero, trazendo perspectivas frescas para narrativas conhecidas.</p>
        
        <h3>Emerald Fennell</h3>
        <p>"Promising Young Woman" estabeleceu Fennell como uma das vozes mais provocativas e necessárias do cinema contemporâneo.</p>
      `,
      excerpt: 'Conheça os diretores emergentes que estão moldando o futuro do cinema com suas visões inovadoras.',
      author: 'Pedro Rodrigues',
      date: new Date('2024-11-20'),
      category: 'Diretores',
      tags: ['diretores', 'cinema contemporâneo', 'novos talentos', 'análise'],
      imageUrl: '/assets/image/Truffaut.jpg',
      readTime: 6
    }
  ];

  private categories: Category[] = [
    { id: 1, name: 'Ficção Científica', slug: 'ficcao-cientifica', description: 'Filmes que exploram tecnologia e futurismo' },
    { id: 2, name: 'Horror', slug: 'horror', description: 'Cinema de terror e suspense' },
    { id: 3, name: 'Clássicos', slug: 'classicos', description: 'Obras-primas atemporais do cinema' },
    { id: 4, name: 'Indústria', slug: 'industria', description: 'Análises sobre o negócio do cinema' },
    { id: 5, name: 'Diretores', slug: 'diretores', description: 'Perfis e análises de cineastas' }
  ];

  constructor() { }

  getPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPost(id: number): Observable<Post | undefined> {
    return of(this.posts.find(post => post.id === id));
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    return of(this.posts.filter(post => post.category === category));
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return of(this.posts.filter(post => post.tags.includes(tag)));
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getRecentPosts(limit: number = 5): Observable<Post[]> {
    return of(this.posts.slice(0, limit));
  }

  searchPosts(query: string): Observable<Post[]> {
    const searchTerm = query.toLowerCase();
    return of(this.posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    ));
  }
}
