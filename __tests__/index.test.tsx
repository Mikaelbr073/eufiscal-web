import { render, screen } from '@testing-library/react'
import { ListaDenunciaUseCase } from '../src/@core/application/denuncia/listar-denuncia.use-case'
import { DenunciaFilter } from '../src/@core/application/filter/denuncia.filter'
import { container, Registry } from '../src/@core/infra/container-registry'
import HeroSection from '../src/components/HeroSection'

describe('HeroSection', () => {
  it('renders a heading', () => {
    render(<HeroSection />)

    const heading = screen.getByText('Sua denúncia pode ser ouvida aqui!')

    expect(heading).toBeInTheDocument()
  })

  it('teste 1', async () => {
    const listarDenunciaUseCase = container.get<ListaDenunciaUseCase>(Registry.ListaDenunciaUseCase);
    const denuncias = await listarDenunciaUseCase.execute(new DenunciaFilter({}));
    expect(denuncias.length).toBeGreaterThanOrEqual(1);
  })
})