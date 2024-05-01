package jnfe_6;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
public class AbstractNFeAdaptadorBeanTest_Improved {
	@Test
    public void converte() {
        assertEquals(2, AbstractNFeAdaptadorBean.convertePosPeso(43, 43));
        assertEquals(3, AbstractNFeAdaptadorBean.convertePosPeso(42, 43));
        assertEquals(8, AbstractNFeAdaptadorBean.convertePosPeso(37, 43));
        assertEquals(9, AbstractNFeAdaptadorBean.convertePosPeso(36, 43));
        assertEquals(2, AbstractNFeAdaptadorBean.convertePosPeso(35, 43));
        assertEquals(3, AbstractNFeAdaptadorBean.convertePosPeso(34, 43));
        assertEquals(4, AbstractNFeAdaptadorBean.convertePosPeso(1, 43));
        assertEquals(6, AbstractNFeAdaptadorBean.convertePosPeso(7, 43));
        assertEquals(3, AbstractNFeAdaptadorBean.convertePosPeso(10, 43));
    }

    @Test
    public void soma() {
        String chNFe = "5206043300991100250655012000000780026730161";
        assertEquals(43, chNFe.length());
        assertEquals(644, AbstractNFeAdaptadorBean.calculaSomaDV(chNFe));
    }
    @Test
    public void calcula() {
        String chNFe = "5206043300991100250655012000000780026730161";
        assertEquals(5, AbstractNFeAdaptadorBean.calculaDV(chNFe));
    }

@Test
public void calculaDV_InvalidLength() {
    String chNFe = "520604330099110025065501200000078002673016"; // 42 characters, not 43
    IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> AbstractNFeAdaptadorBean.calculaDV(chNFe));
    assertNotNull(exception);
}
@Test
public void calculaDV_NullInput() {
    NullPointerException exception = assertThrows(NullPointerException.class, () -> AbstractNFeAdaptadorBean.calculaDV(null));
    assertNotNull(exception);
}
@Test
public void calculaDV_EmptyInput() {
    IllegalArgumentException exception = assertThrows(IllegalArgumentException.class, () -> AbstractNFeAdaptadorBean.calculaDV(""));
    assertNotNull(exception);
}
}