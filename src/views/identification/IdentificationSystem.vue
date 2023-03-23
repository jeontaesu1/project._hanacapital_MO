<script>
import { ref, provide } from 'vue';

import LayerIdentificationTypeSelect from '@/views/identification/LayerIdentificationTypeSelect.vue';
import LayerIdentificationBusiness from '@/views/identification/LayerIdentificationBusiness.vue';
import LayerIdentificationMethodSelect from '@/views/identification/LayerIdentificationMethodSelect.vue';
import LayerIdentificationPhone from '@/views/identification/LayerIdentificationPhone.vue';
import LayerIdentificationCertificate from '@/views/identification/LayerIdentificationCertificate.vue';
import LayerIdentificationCard from '@/views/identification/LayerIdentificationCard.vue';
import LayerIdentificationKakaopay from '@/views/identification/LayerIdentificationKakaopay.vue';
import LayerIdentificationARS from '@/views/identification/LayerIdentificationARS.vue';

export default {
  components: {
    LayerIdentificationTypeSelect,
    LayerIdentificationBusiness,
    LayerIdentificationMethodSelect,
    LayerIdentificationPhone,
    LayerIdentificationCertificate,
    LayerIdentificationCard,
    LayerIdentificationKakaopay,
    LayerIdentificationARS,
  },
  setup() {
    const layerIdentificationTypeSelect = ref(null);
    const layerIdentificationBusiness = ref(null);
    const layerIdentificationMethodSelect = ref(null);
    const layerIdentificationPhone = ref(null);
    const layerIdentificationCertificate = ref(null);
    const layerIdentificationCard = ref(null);
    const layerIdentificationKakaopay = ref(null);
    const layerIdentificationARS = ref(null);

    const layerIdentificationTypeSelectOpen = (e = {}) => {
      layerIdentificationTypeSelect.value.layer.open(e.target);
    };
    const layerIdentificationBusinessOpen = (e = {}) => {
      layerIdentificationBusiness.value.layer.open(e.target);
    };
    const layerIdentificationMethodSelectOpen = (e = {}) => {
      layerIdentificationMethodSelect.value.layer.open(e.target);
    };
    const layerIdentificationMethodSelectClose = () => {
      layerIdentificationMethodSelect.value.layer.close();
    };
    const layerIdentificationPhoneOpen = (e = {}) => {
      layerIdentificationPhone.value.layer.open(e.target);
    };
    const layerIdentificationCertificateOpen = (e = {}) => {
      layerIdentificationCertificate.value.layer.open(e.target);
    };
    const layerIdentificationCardOpen = (e = {}) => {
      layerIdentificationCard.value.layer.open(e.target);
    };
    const layerIdentificationKakaopayOpen = (e = {}) => {
      layerIdentificationKakaopay.value.layer.open(e.target);
    };
    const layerIdentificationARSOpen = (e = {}) => {
      layerIdentificationARS.value.layer.open(e.target);
      layerIdentificationARS.value.reStartTimer();
    };

    const start = () => {
      layerIdentificationTypeSelectOpen();
    };

    provide('identificationSystem', {
      layerIdentificationTypeSelectOpen,
      layerIdentificationBusinessOpen,
      layerIdentificationMethodSelectOpen,
      layerIdentificationMethodSelectClose,
      layerIdentificationPhoneOpen,
      layerIdentificationCertificateOpen,
      layerIdentificationCardOpen,
      layerIdentificationKakaopayOpen,
      layerIdentificationARSOpen,
    });

    return {
      layerIdentificationTypeSelect,
      layerIdentificationBusiness,
      layerIdentificationMethodSelect,
      layerIdentificationPhone,
      layerIdentificationCertificate,
      layerIdentificationCard,
      layerIdentificationKakaopay,
      layerIdentificationARS,
      layerIdentificationTypeSelectOpen,
      layerIdentificationBusinessOpen,
      layerIdentificationMethodSelectOpen,
      layerIdentificationMethodSelectClose,
      layerIdentificationPhoneOpen,
      layerIdentificationCertificateOpen,
      layerIdentificationCardOpen,
      layerIdentificationKakaopayOpen,
      layerIdentificationARSOpen,
      start,
    };
  },
};
</script>

<template>
  <LayerIdentificationTypeSelect ref="layerIdentificationTypeSelect" />
  <LayerIdentificationBusiness ref="layerIdentificationBusiness" />
  <LayerIdentificationMethodSelect ref="layerIdentificationMethodSelect" />
  <LayerIdentificationPhone ref="layerIdentificationPhone" />
  <LayerIdentificationCertificate ref="layerIdentificationCertificate" />
  <LayerIdentificationCard ref="layerIdentificationCard" />
  <LayerIdentificationKakaopay ref="layerIdentificationKakaopay" />
  <LayerIdentificationARS ref="layerIdentificationARS" />
</template>
